import { Input, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {
	AbstractControl,
	AsyncValidatorFn,
	ValidationErrors,
	Validator,
	Validators,
	ValidatorFn
} from '@angular/forms';
import { UitFormElement } from './form-element';
import { IValidationResult } from '../interfaces/validation-result.interface';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
/**
 * Represents a base implementation for Angular input components with validation.
 */
export class UitValidationElement extends UitFormElement {
	/**
	 * Gets the a UitValidationBase domain model instance.
	 */
	@ViewChild(NgModel)
	private model: NgModel;
	/**
	 * Gets or sets a value indicating whether the contents of the input component is mandatory.
	 */
	@Input()
	public required: boolean;
	/**
	 * Creates a new instance of UitValidationBase class.
	 * @param validators - Validator and validator functions.
	 * @param validatorsAsync - Validator and async validator functions.
	 */
	constructor(public validators: Array<Validator | ValidatorFn>,
							public validatorsAsync: Array<Validator | AsyncValidatorFn>) {
		super();
	}
	/**
	 * Gets a value that indicates whether a UitValidationBase element is invalid.
	 */
	public get invalid(): Observable<boolean> {
		return this.model && this.model.control
			? this.validate().map((validationResult: IValidationResult) => Object.keys(validationResult || {}).length > 0)
			: Observable.of(false);
	}
	/**
	 * Gets the failure messages of the UitValidationBase element when it is invalid.
	 */
	public get failures(): Observable<string[]> {
		return this.validate()
			.map((validationResult: IValidationResult) =>
				Object.keys(validationResult)
				.map((key: string) => this.getFailureMessage(validationResult, key))
			);
	}
	/**
	 * Normalizes a validation object to a (async) validation function.
	 * @param validator - Validation object.
	 */
	private normalize(validator: Validator | ValidatorFn): ValidatorFn | AsyncValidatorFn {
		const fn: Function = (validator as Validator).validate.bind(validator);
		return (typeof fn === 'function')
			? (control: AbstractControl) => fn(control)
			: <ValidatorFn | AsyncValidatorFn> validator;
	}
	/**
	 * Composes the validation objects.
	 * @param validators - Collection of validation objects.
	 */
	private compose(validators: Array<Validator | ValidatorFn>): AsyncValidatorFn | ValidatorFn {
		return (validators == null || validators.length === 0)
			? null
			: Validators.compose(validators.map(this.normalize));
	}
	/**
	 * Merges all validation error information.
	 * @param validators - Collection of validation objects.
	 * @param control - FormControl with validation implementation.
	 */
	private synchronousValid(validators: Array<Validator | ValidatorFn>, control: AbstractControl): ValidationErrors {
		return this.compose(validators)(control);
	}
	/**
	 * Indicates the current status of the validation information.
	 */
	private validate(): Observable<IValidationResult> {
		return this.getValidation(this.validators, this.validatorsAsync)(this.model.control);
	}
	/**
	 * Handles the validation objects and extracts thegiven parts.
	 * @param validators - Validation objects.
	 * @param asyncValidators - Async validation objects.
	 */
	private getValidation(validators: Array<Validator | ValidatorFn>,
												asyncValidators: Array<Validator | AsyncValidatorFn>): Function {
		return (control: AbstractControl) => {
			if (asyncValidators) {
				return this.compose(asyncValidators)(control).map((validationErrors: ValidationErrors) => {
					const secondary: ValidationErrors = this.synchronousValid(validators, control);
					if (secondary || validationErrors) {
						return Object.assign({}, secondary, validationErrors);
					}
				});
			}
			return validators
				? Observable.of(this.synchronousValid(validators, control))
				: Observable.of(null);
		};
	}
	/**
	 * Provides the default validation texts for several categories.
	 * @param result - Validation result infromation.
	 * @param key - Key of category.
	 */
	private getFailureMessage(result: IValidationResult, key: string): string {
		switch (key) {
			case 'required':
				return 'Please enter a value.';
			case 'pattern':
				return 'Value does not match required pattern.';
			case 'minlength':
				return 'Value must be N characters.';
			case 'maxlength':
				return 'Value must be a maximum of N characters.';
			case 'email':
				return 'Value does not match to a email address pattern.';
		}
		switch (typeof result[key]) {
			case 'string':
				return <string>result[key];
			default:
				return `Validation failed: ${key}`;
		}
	}
}
