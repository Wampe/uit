/**
 * Specifies when the click event should be raised.
 */
export enum ClickMode {
	/**
	 * Specifies that the click event should be raised as soon as a button is pressed.
	 */
	press = 'press',
	/**
	 * Specifies that the click event should be raised when a button is pressed and released.
	 */
	release = 'release',
	/**
	 * Specifies that the click event should be raised when the mouse hovers over a control.
	 */
	hover = 'hover'
}
