import { Input, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UitElement } from './element';
import { UpdateSourceTrigger } from '../enums/update-source-trigger.enum';
/**
 * UiFormBase is a base class for form (item) component core level implementations
 * building on Angular elements and (basic) input characteristics.
 */
export class UitFormBase extends UitElement implements ControlValueAccessor {
	/**
	 * Gets or sets a value that will get displayed as label text.
	 */
	@Input()
	public label: string;
	/**
	 * Gets or sets a value that determines the timing of binding source updates.
	 */
	@Input()
	public updateSource: UpdateSourceTrigger;
	/**
	 * Gets or sets a value indicating whether the contents of the input component can be changed.
	 */
	@Input()
	public readonly: boolean;
	/**
	 * Gets or sets a value indicating whether the contents of the input component is mandatory.
	 */
	@Input()
	public required: boolean;
	/**
	 * Gets or sets the value of the input element.
	 */
	get value(): any {
		return this.innerValue;
	}
	set value(value: any) {
		if (!this.disabled && this.innerValue !== value) {
			this.innerValue = value;
			if (this.changed && this.updateSource === UpdateSourceTrigger.propertyChanged) {
				this.changed(value);
			}
		}
	}
	/**
	 * Updates the current value of the input component in data model.
	 */
	private changed: (_: any) => void;
	/**
	 * Indicates the current input component is touched.
	 */
	private touched: () => void;
	/**
	 * Property for internal handling of the input component value.
	 */
	private innerValue: any;
	/**
	 * Creates a new instance of the UitFormBase class.
	 */
	constructor() {
		super();
		this.updateSource = UpdateSourceTrigger.propertyChanged;
	}
	/**
	 * Writes a new value to the element.
	 * This method will be called by the forms API to write to the view when programmatic (model -> view) changes are requested.
	 * @param value - New value to the element.
	 */
	public writeValue(value: any): void {
		if (value !== undefined) {
			this.innerValue = value;
		}
	}
	/**
	 * Registers a callback function that should be called when the control's value changes in the UI.
	 * This is called by the forms API on initialization so it can update the form model when values propagate from the view (view -> model).
	 * @param fn - Callback function that should be called when the control´s value changes.
	 */
	public registerOnChange(fn: any): void {
		this.changed = fn;
	}
	/**
	 Registers a callback function that should be called when the control receives a blur event.
	 * This is called by the forms API on initialization so it can update the form model on blur.
	 * @param fn - Callback function that should be called when the control receives a blur event.
	 */
	public registerOnTouched(fn: any): void {
		this.touched = fn;
	}
	/**
	 * This function is called by the forms API when the control status changes to or from "DISABLED".
	 * Depending on the value, it should enable or disable the appropriate DOM element.
	 * @param isDisabled - Value if form element is disabled.
	 */
	public setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
	/**
	 * Occurs when the input element within focus.
	 */
	public blur(event: FocusEvent): void {
		if (this.changed && this.updateSource === UpdateSourceTrigger.lostFocus) {
			this.changed(this.innerValue);
		}
	}
}
