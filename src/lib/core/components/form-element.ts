import { Input } from '@angular/core';
import { UitValueElement } from './value-element';
/**
 * UiFormBase is a base class for form (item) component core level implementations
 * building on Angular elements and (basic) input characteristics.
 */
export class UitFormElement extends UitValueElement {
	/**
	 * Gets or sets a value that will get displayed as label text.
	 */
	@Input()
	public label: string;
	/**
	 * Gets or sets a value indicating whether the contents of the input component can be changed.
	 */
	@Input()
	public readonly: boolean;
}
