import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemElement } from '../core/components/item-element';
/**
 * ToDo: comment
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
export class UitTreeViewItem extends UitItemElement {
	/**
	 * Gets or sets a value that helds a itemssource collection.
	 */
	@Input()
	public items: any[];
	/**
	 * ToDO: comment
	 */
	@Input()
	public isExpanded: boolean;
	/**
	 * ToDO: comment
	 */
	@Input()
	public header: string;
	/**
	 * Creates a new instance of UitTreeView class.
	 */
	constructor() {
		super();
		this.class = 'uit-tree-view-item';
		this.items = [];
	}
	/**
	 * ToDO: comment
	 */
	public toggle(): void {
		this.isExpanded = !this.isExpanded;
	}
}
