/**
 * Represents a object with information about the validation of a UitValidationBase element.
 */
export interface IValidationResult {
	/**
	 * Validation error infromation.
	 */
	[validator: string]: string | boolean;
}
