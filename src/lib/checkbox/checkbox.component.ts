import { Component,	forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitToggleValueElement } from '../core/components/toggle-value-element';
/**
 * ToDo: comment
 */
@Component({
	selector: 'uit-checkbox',
	templateUrl: './checkbox.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitCheckbox),
			multi: true
		}
	]
})
export class UitCheckbox extends UitToggleValueElement {
	/**
	 * Creates a new instance of the UitCheckbox class.
	 */
	constructor() {
		super();
		this.class = 'uit-checkbox';
	}
}
