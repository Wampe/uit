import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemsElement } from '../core/components/items-element';
/**
 * ToDo: comment
 */
@Component({
	selector: 'uit-tree-view',
	templateUrl: './tree-view.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitTreeView),
			multi: true
		}
	]
})
export class UitTreeView extends UitItemsElement {
	/**
	 * Creates a new instance of UitTreeView class.
	 */
	constructor() {
		super();
		this.class = 'uit-tree-view';
	}
}
