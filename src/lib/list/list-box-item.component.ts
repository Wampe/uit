import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemElement } from '../core/components/item-element';
/**
 * Represents a Angular item component, which is a child element of a UitNavigation component.
 */
@Component({
	selector: 'uit-list-box-item',
	templateUrl: './list-box-item.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitListBoxItem),
			multi: true
		},
		{
			provide: UitItemElement,
			useExisting: forwardRef(() => UitListBoxItem),
			multi: true
		}
	]
})
export class UitListBoxItem extends UitItemElement {
	/**
	 * Creates a new instance of UitListBox class.
	 */
	constructor() {
		super();
		this.class = 'uit-list-box-item';
	}
}
