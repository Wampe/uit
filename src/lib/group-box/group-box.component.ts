import { Component, Input } from '@angular/core';
import { UitElement } from '../core/components/element';
/**
 * Represents a Angular component as a headered content container element.
 */
@Component({
	selector: 'uit-group-box',
	templateUrl: './group-box.component.html'
})
export class UitGroupBox extends UitElement {
	/**
	 * Gets or sets a value that will get displayed as label at the top of the group box.
	 */
	@Input()
	public header: string;
	/**
	 * Creates a new instance of UitGroupBox class.
	 */
	constructor() {
		super();
		this.class = 'uit-group-box';
	}
}
