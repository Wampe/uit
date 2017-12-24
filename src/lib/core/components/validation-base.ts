import { ViewChild } from '@angular/core';
import { NgModel, NG_VALIDATORS, NG_ASYNC_VALIDATORS} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {
	AbstractControl,
	AsyncValidatorFn,
	ValidationErrors,
	Validator,
	Validators,
	ValidatorFn
} from '@angular/forms';
import { UitFormBase } from './form-base';
import { IValidationResult } from '../interfaces/validation-result.interface';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
/**
 * ToDo: comment
 */
export class UitValidationBase extends UitFormBase {
	/**
	 * ToDO: comment
	 */
	@ViewChild(NgModel)
	private model: NgModel;
	/**
	 * ToDO: comment
	 * @param validators ToDO: comment
	 * @param validatorsAsync ToDO: comment
	 */
	constructor(public validators: Array<Validator | ValidatorFn>,
							public validatorsAsync: Array<Validator | AsyncValidatorFn>) {
		super();
	}
	/**
	 * ToDO: comment
	 */
	public validate(): Observable<IValidationResult> {
		return this.getValidation(this.validators, this.validatorsAsync)(this.model.control);
	}
	/**
	 * TODO: comment
	 */
	public get invalid(): Observable<boolean> {
		return this.validate().map((validationResult: IValidationResult) => Object.keys(validationResult || {}).length > 0);
	}
	/**
	 * ToDO: comment
	 * @param validator ToDO: comment
	 */
	private normalize(validator: Validator | ValidatorFn): ValidatorFn | AsyncValidatorFn {
		const fn: Function = (validator as Validator).validate.bind(validator);
		return (typeof fn === 'function')
			? (control: AbstractControl) => fn(control)
			: <ValidatorFn | AsyncValidatorFn> validator;
	}
	/**
	 * ToDO: comment
	 * @param validators ToDo: comment
	 */
	private compose(validators: Array<Validator | ValidatorFn>): AsyncValidatorFn | ValidatorFn {
		return (validators == null || validators.length === 0)
			? null
			: Validators.compose(validators.map(this.normalize));
	}
	/**
	 * ToDO: comment
	 * @param validators ToDo: comment
	 * @param asyncValidators ToDo: comment
	 */
	private getValidation(validators: Array<Validator | ValidatorFn>,
												asyncValidators: Array<Validator | AsyncValidatorFn>): Function {
		return (control: AbstractControl) => {
			function synchronousValid(): ValidationErrors {
				return this.compose(validators)(control);
			}
			if (asyncValidators) {
				return this.compose(asyncValidators)(control).map((validationErrors: ValidationErrors) => {
					const secondary: ValidationErrors = synchronousValid();
					if (!!secondary || !!validationErrors) {
						return Object.assign({}, secondary, validationErrors);
					}
				});
			}
			return !!validators
				? Observable.of(synchronousValid())
				: Observable.of(null);
		};
	}
}
