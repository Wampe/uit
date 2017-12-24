/**
 * Specifies the type of the given input component.
 */
export enum TextboxInputType {
	/**
	 * Specifies that the textbox component just allows values matching to a email address.
	 */
	email = 'email',
	/**
	 * Specifies that the textbox component just allows numeric values.
	 */
	number = 'number',
	/**
	 * Specifies the input component as password input.
	 */
	password = 'password',
	/**
	 * Specifies that the textbx component allows alpha-numeric values.
	 */
	text = 'text'
}
