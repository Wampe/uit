import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitFormBase } from '../core/components/form-base';
/**
 * ToDO: comment
 */
@Component({
	selector: 'uit-textbox',
	templateUrl: './textbox.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitTextbox),
			multi: true
		}
	]
})
export class UitTextbox extends UitFormBase {
	/**
	 * ToDo: comment
	 */
	@Input()
	public isMultine: boolean;
	/**
	 * Creates a new instance of the UitTextbox class.
	 */
	constructor() {
		super();
		this.class = 'uit-textbox';
	}
}
