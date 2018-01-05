import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemsElement } from '../core/components/items-element';
/**
 * Represents a Angular items component, which provides a iteration of UitLIstBoxItem elements.
 */
@Component({
	selector: 'uit-list-box',
	templateUrl: './list-box.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitListBox),
			multi: true
		}
	]
})
export class UitListBox extends UitItemsElement {
	/**
	 * Creates a new instance of UitListBox class.
	 */
	constructor() {
		super();
		this.class = 'uit-list-box';
	}
}
