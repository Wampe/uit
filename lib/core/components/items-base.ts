import {
	AfterViewInit,
	ContentChildren,
	Input,
	OnDestroy,
	QueryList,
	ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UitElement } from './element';
import { UitItemBase } from './item-base';
/**
 * Represents the base class for all items components.
 */
export class UitItemsBase extends UitElement implements AfterViewInit, OnDestroy {
	/**
	 * Gets or sets a value that helds a itemssource collection.
	 */
	@Input()
	public items: any[];
	/**
	 * Indicates a specific attribute key that will get showen in the default item template.
	 */
	@Input() public displayValue: string;
	/**
	 * Configures a content query with the corresponding items.
	 */
	@ContentChildren(UitItemBase)
	public contentChildren: QueryList<UitItemBase>;
	/**
	 * Configures a view query with the corresponding items.
	 */
	@ViewChildren(UitItemBase)
	public viewChildren: QueryList<UitItemBase>;
	/**
	 * Gets a value that indicates whether double source of items is declared.
	 */
	public isDouble: boolean;
	/**
	 * Represents a disposable resource, such as the execution of an Observable.
	 */
	private clickSubscription: Subscription;
	/**
	 * Lifecycle hook that is called after a component's view has been fully initialized.
	 */
	public ngAfterViewInit(): void {
		this.isDouble = this.contentChildren.length > 0 && this.viewChildren.length > 0;
		if (this.isDouble) {
			throw new Error('Double declaration of items source. Please use just one way for declaration.');
		} else {
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
	}
	/**
	 * Handles the current item´s component instance and registers the clicked event.
	 */
	private handleChildren(childs: QueryList<UitItemBase>): void {
		childs.forEach((element: UitItemBase) => {
			this.clickSubscription = element.clicked.subscribe((event: MouseEvent) => {
				childs.forEach((child: UitItemBase) => {
					child.isSelected = element === child;
				});
			});
		});
	}
}
