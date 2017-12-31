import {
	Component,
	forwardRef,
	Inject,
	Input,
	Optional
} from '@angular/core';
import {
	NG_VALUE_ACCESSOR,
	NG_VALIDATORS,
	NG_ASYNC_VALIDATORS,
	Validator,
	ValidatorFn,
	AsyncValidator,
	AsyncValidatorFn
} from '@angular/forms';
import { UitValidationElement } from '../core/components/validation-element';
import { TextboxInputType, UpdateSourceTrigger } from '../core/enums/index';
/**
 * Represents a Angular input component, which takes a alpha-numeric or numeric only value.
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
export class UitTextbox extends UitValidationElement {
	/**
	 * Gets or sets a value that indicates the element as single or multine input.
	 */
	@Input()
	public isMultiline: boolean;
	/**
	 * Gets or sets a value that indicates the type of the input element.
	 */
	@Input()
	public type: TextboxInputType;
	/**
	 * Gets or sets a value that indicates the steps for numeric input.
	 * It also can be used to define the numeric value as decimal.
	 */
	@Input()
	public step: number;
	/**
	 * Gets or sets a value that is minimum for input.
	 */
	@Input()
	public min: number;
	/**
	 * Gets or sets a value that is maximum for input.
	 */
	@Input()
	public max: number;
	/**
	 * Creates a new instance of the UitTextbox class.
	 * @param validators - Optinal validator and validator functions
	 * @param validatorsAsync - Optinal validator and async validator functions
	 */
	constructor(@Optional() @Inject(NG_VALIDATORS) validators:  Array<Validator | ValidatorFn>,
							@Optional() @Inject(NG_ASYNC_VALIDATORS) validatorsAsync: Array<Validator | AsyncValidatorFn>) {
		super(validators, validatorsAsync);
		this.class = 'uit-textbox';
		this.updateSource = UpdateSourceTrigger.lostFocus;
	}
	/**
	 * Increases the current value as addition with the step value.
	 */
	public increaseNumericValue(): void {
		this.value = Number(this.value) + Number(this.step);
	}
	/**
	 * Decreases the current value as subtraction with the step value.
	 */
	public decreaseNumericValue(): void {
		this.value = Number(this.value) - Number(this.step);
	}
}
