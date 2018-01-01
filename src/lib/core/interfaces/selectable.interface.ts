import { EventEmitter } from '@angular/core';
/**
 * Represents a selectable item element.
 */
export interface ISelectable {
	/**
	 * Gets a value that indicates whether a selectable item element is currently selected.
	 */
	isSelected: boolean;
	/**
	 * Emits the event that provides the click handler of the item element.
	 */
	clicked: EventEmitter<void>;
	/**
	 * Gets or sets the value of the input element.
	 */
	value: any;
}
