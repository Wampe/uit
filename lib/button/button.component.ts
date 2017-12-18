import { Component } from '@angular/core';
import { UitButtonBase } from '../core/components/button-base';
/**
 * ToDo: comment
 */
@Component({
	selector: 'uit-button',
	templateUrl: './button.component.html'
})
export class UitButtonComponent extends UitButtonBase {
	/**
	 *Creates a new instance of UitBUttonComponent class.
	 */
	constructor() {
		super();
		this.class = 'uit-button';
	}
}
