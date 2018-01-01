import {
	Component,
	EventEmitter,
	forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemElement } from '../core/components/item-element';
/**
 * Represents a Angular input component that can be selected, but not cleared, by a user.
 * The checked property of a RadioButton can be set by clicking it, but it can only be cleared programmatically.
 */
@Component({
	selector: 'uit-radio-button',
	templateUrl: 'radio-button.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitRadioButton),
			multi: true
		},
		{
			provide: UitItemElement,
			useExisting: forwardRef(() => UitRadioButton),
			multi: true
		}
	]
})
export class UitRadioButton extends UitItemElement {
	/**
	 * Creates a new instance of UitRadioButton class.
	 */
	constructor() {
		super();
		this.class = 'uit-radio-button';
	}
}
