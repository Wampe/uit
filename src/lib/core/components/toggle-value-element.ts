import {
	Component,
	Input,
	HostBinding,
	HostListener
} from '@angular/core';
import { UitValueElement } from './value-element';
/**
 * Represents a base implementation for Angular input components with toggle states.
 */
export class UitToggleValueElement extends UitValueElement {
	/**
	 * Gets or sets a value that indicates whether a UitToggleButton element is currently checked.
	 * Provides also the checked state specific style class.
	 */
	@Input()
	@HostBinding('class.active')
	public checked: boolean;
	/**
	 * Invoked when an click event is raised on this element.
	 */
	@HostListener('click')
	private onClick() {
		this.value = this.checked = !this.checked;
	}
}
