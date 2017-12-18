import { HostBinding, HostListener } from '@angular/core';
/**
 * UitElement is a base class for component core level implementations
 * building on Angular elements and basic presentation characteristics.
 */
export class UitElement {
	/**
	 * Gets a value indicating whether the mouse pointer is located over this element.
	 */
	protected isMouseOver: boolean;
	/**
	 * Gets a value that determines whether this element has logical focus.
	 */
	protected isFocused: boolean;
	/**
	 * Provides the main component class.
	 */
	@HostBinding('class')
	protected class: string;
	/**
	 * Invoked when an mouseenter event is raised on this element.
	 */
	@HostListener('mouseenter')
	private onMouseEnter() {
		this.isMouseOver = true;
	}
	/**
	 * Invoked when an mouseleave event is raised on this element.
	 */
	@HostListener('mouseleave')
	private onMouseLeave() {
		this.isMouseOver = false;
	}
}
