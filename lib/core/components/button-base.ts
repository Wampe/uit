import { HostListener } from '@angular/core';
import { UitElement } from './element';
/**
 * Represents the base class for all button components.
 */
export class UitButtonBase extends UitElement {
	/**
	 * Gets a value that indicates whether a UitButtonBase element is currently activated.
	 */
	protected isPressed: boolean;
	/**
	 * Invoked when an mousedown event is raised on this element.
	 */
	@HostListener('mousedown', ['$event'])
	private onMouseDown(event: MouseEvent) {
		if (event.button === 0) {
			this.isPressed = true;
		}
	}
	/**
	 * Invoked when an mouseup event is raised on this element.
	 */
	@HostListener('mouseup', ['$event'])
	private onMouseUp(event: MouseEvent) {
		if (event.button === 0) {
			this.isPressed = false;
		}
	}
}
