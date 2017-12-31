import { UitButtonElement } from './button-element';
/**
 * Represents the base class for all selectable components.
 */
export class UitItemElement extends UitButtonElement {
	/**
	 * Gets a value that indicates whether a UitItemBase element is currently selected.
	 */
	public isSelected: boolean;
}
