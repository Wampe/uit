import { Component } from '@angular/core';
import { UitButtonElement } from '../core/components/button-element';
/**
 * Represents a Angular button component, which reacts to the click event.
 */
@Component({
	selector: 'uit-button',
	templateUrl: './button.component.html'
})
export class UitButton extends UitButtonElement {
	/**
	 *Creates a new instance of UitBUttonComponent class.
	 */
	constructor() {
		super();
		this.class = 'uit-button';
	}
}
