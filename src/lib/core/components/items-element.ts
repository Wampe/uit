import {
	AfterViewInit,
	ContentChild,
	ContentChildren,
	Input,
	OnDestroy,
	QueryList,
	TemplateRef,
	ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UitValueElement } from './value-element';
import { UitItemElement } from './item-element';
import { UitItemTemplateDirective } from '../../list/item-template.directive';
import { ISelectable } from '../interfaces/selectable.interface';
/**
 * Represents the base class for all items components.
 */
export class UitItemsElement extends UitValueElement implements AfterViewInit, OnDestroy {
	/**
	 * Gets or sets a value that helds a itemssource collection.
	 */
	@Input()
	public items: any[];
	/**
	 * Indicates a specific attribute key that will get showen in the default item template.
	 */
	@Input()
	public displayValue: string;
	/**
	 * Gets or sets a value for a message displayed when no item exists.
	 */
	@Input()
	public noItemsMessage: string;
	/**
	 * Defines a custom item template for the UitListItemComponent.
	 */
	@ContentChild(UitItemTemplateDirective, { read: TemplateRef })
	public itemTemplate: TemplateRef<UitItemTemplateDirective>;
	/**
	 * Configures a content query with the corresponding items.
	 */
	@ContentChildren(UitItemElement)
	public contentChildren: QueryList<ISelectable>;
	/**
	 * Configures a view query with the corresponding items.
	 */
	@ViewChildren(UitItemElement)
	public viewChildren: QueryList<ISelectable>;
	/**
	 * Gets a value that indicates whether double source of items is declared.
	 */
	public isDouble: boolean;
	/**
	 * Gets a value that indicates whether items existing.
	 */
	public hasItems: boolean;
	/**
	 * Represents a disposable resource, such as the execution of an Observable.
	 */
	private clickSubscription: Subscription;
	/**
	 * Represents a disposable resource, such as the execution of an Observable.
	 */
	private childChangedSubscription: Subscription;
	/**
	 * Creates a new instance of UitItemsElement class.
	 */
	constructor() {
		super();
		this.displayValue = '';
		this.hasItems = false;
		this.noItemsMessage = 'Currently no items.';
	}
	/**
	 * Lifecycle hook that is called after a component's view has been fully initialized.
	 */
	public ngAfterViewInit(): void {
		this.isDouble = this.contentChildren.length > 0 && this.viewChildren.length > 0;
		if (this.isDouble) {
			throw new Error('Double declaration of items source. Please use just one way for declaration.');
		} else {
			if (this.items) {
				this.childChangedSubscription =
					this.viewChildren.changes.subscribe(() => this.handleChildren(this.viewChildren));
			} else {
				this.childChangedSubscription =
					this.contentChildren.changes.subscribe(() => this.handleChildren(this.contentChildren));
			}
			this.handleChildren(this.items ? this.viewChildren : this.contentChildren);
		}
	}
	/**
	 * Lifecycle hook that is called when a directive, pipe or service is destroyed.
	 */
	public ngOnDestroy(): void {
		if (this.clickSubscription) {
			this.clickSubscription.unsubscribe();
		}
		if (this.childChangedSubscription) {
			this.childChangedSubscription.unsubscribe();
		}
	}
	/**
	 * Handles the current item´s component instance and registers the clicked event.
	 * @param childs - Collection of current item components.
	 */
	private handleChildren(childs: QueryList<ISelectable>): void {
		childs.forEach((element: ISelectable) => {
			this.clickSubscription = element.clicked.subscribe(() => {
				childs.forEach((child: ISelectable) => {
					child.isSelected = element === child;
				});
				const selectedItem = childs.find((item: ISelectable) => item.isSelected);
				if (selectedItem) {
					this.value = selectedItem.value;
				}
			});
		});
		setTimeout(() => {
			this.hasItems = (this.items && this.items.length > 0)
				|| (this.contentChildren && this.contentChildren.length > 0)
				|| (this.viewChildren && this.viewChildren.length > 0);
		});
	}
}
