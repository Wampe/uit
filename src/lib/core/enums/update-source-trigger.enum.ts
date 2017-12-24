/**
 * Describes the timing of binding source updates.
 */
export enum UpdateSourceTrigger {
	/**
	 * Updates the binding source whenever the binding target element loses focus.
	 */
	lostFocus = 'lostFocus',
	/**
	 * Updates the binding source immediately whenever the binding target property changes.
	 */
	propertyChanged = 'propertyChanged'
}
