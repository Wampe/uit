import {
	AfterViewInit,
	ContentChild,
	ContentChildren,
	Component,
	forwardRef,
	HostBinding,
	Input,
	OnDestroy,
	QueryList,
	TemplateRef,
	ViewChildren
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { UitItemElement } from '../core/components/item-element';
import { ISelectable } from '../core/interfaces/selectable.interface';
/**
 * Represents a selectable Angular item component in a UitTreeView element.
 */
@Component({
	selector: 'uit-tree-view-item',
	templateUrl: './tree-view-item.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitTreeViewItem),
			multi: true
		},
		{
			provide: UitItemElement,
			useExisting: forwardRef(() => UitTreeViewItem),
			multi: true
		},
	]
})
export class UitTreeViewItem extends UitItemElement implements AfterViewInit, OnDestroy {
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
	 * Gets or sets whether the nested items in a UitTreeViewItem are expanded or collapsed.
	 */
	@Input()
	// @HostBinding('class.active')
	public isExpanded: boolean;
	/**
	 * Gets or sets a value that will get displayed as label of the item.
	 */
	@Input()
	public header: string;
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
	 * Represents a disposable resource, such as the execution of an Observable.
	 */
	private clickSubscription: Subscription;
	/**
	 * Represents a disposable resource, such as the execution of an Observable.
	 */
	private childChangedSubscription: Subscription;
	/**
	 * Creates a new instance of UitTreeView class.
	 */
	constructor() {
		super();
		this.class = 'uit-tree-view-item';
		this.items = [];
	}
	/**
	 * Toggles the isExpanded value.
	 */
	public toggle(): void {
		this.isExpanded = !this.isExpanded;
	}
	/**
	 * Lifecycle hook that is called after a component's view has been fully initialized.
	 */
	public ngAfterViewInit(): void {
		if (this.items) {
			this.childChangedSubscription =
				this.viewChildren.changes.subscribe(() => this.handleChildren(this.viewChildren));
		} else {
			this.childChangedSubscription =
				this.contentChildren.changes.subscribe(() => this.handleChildren(this.contentChildren));
		}
		this.handleChildren(this.items ? this.viewChildren : this.contentChildren);
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
	}
}
