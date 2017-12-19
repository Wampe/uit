import { Component } from '@angular/core';
import { UitButtonBase } from '../core/components/button-base';
/**
 * Represents a Angular button component, which reacts to the click event.
 */
@Component({
	selector: 'uit-button',
	templateUrl: './button.component.html'
})
export class UitButton extends UitButtonBase {
	/**
	 *Creates a new instance of UitBUttonComponent class.
	 */
	constructor() {
		super();
		this.class = 'uit-button';
	}
}
