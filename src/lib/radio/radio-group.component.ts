import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemsElement } from '../core/components/items-element';
/**
 * Represents a Angular items component that provides the selection behavior for grouped radio button elements.
 */
@Component({
	selector: 'uit-radio-group',
	templateUrl: './radio-group.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitRadioGroup),
			multi: true
		}
	]
})
export class UitRadioGroup extends UitItemsElement {
	/**
	 * Creates a new instance of UitRadioGroup class.
	 */
	constructor() {
		super();
		this.class = 'uit-radio-group';
	}
}
