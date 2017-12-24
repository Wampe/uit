/**
 * Indicates where an element should be displayed on the vertical axis
 * relative to the allocated layout slot of the parent element.
 */
export enum VerticalAlignment {
	/**
	 * The child element is aligned to the bottom of the parent's layout slot.
	 */
	bottom = 'bottom',
	/**
	 * The child element is aligned to the center of the parent's layout slot.
	 */
	center = 'center',
	/**
	 * The child element stretches to fill the parent's layout slot.
	 */
	stretch = 'stretch',
	/**
	 * The child element is aligned to the top of the parent's layout slot.
	 */
	top = 'top'
}
