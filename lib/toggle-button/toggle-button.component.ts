import {
	Component,
	Input,
	HostBinding,
	HostListener
} from '@angular/core';
import { UitButtonBase } from '../core/components/button-base';
/**
 * Represents a Angular toggle button component, which reacts to the click event.
 * The toggle button provides two states, similar to a checkbox element.
 */
@Component({
	selector: 'uit-toggle-button',
	templateUrl: './toggle-button.component.html',
})
export class UitToggleButton extends UitButtonBase {
	/**
	 * Gets or sets a value that indicates whether a UitToggleButton element is currently checked.
	 * Provides also the checked state specific style class.
	 */
	@Input()
	@HostBinding('class.active')
	public isChecked: boolean;
	/**
	 * Creates a new instance of UitToggleButtonComponent class.
	 */
	constructor() {
		super();
		this.class = 'uit-toggle-button';
	}
	/**
	 * Invoked when an click event is raised on this element.
	 */
	@HostListener('click')
	private onClick() {
		this.isChecked = !this.isChecked;
	}
}
