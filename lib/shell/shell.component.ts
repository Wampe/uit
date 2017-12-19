import { Component } from '@angular/core';
import { UitElement } from '../core/components/element';
/**
 * Represents a Angular shell container component, which provides a layout basement
 * for specific site parts like header, footer and content.
 */
@Component({
	selector: 'uit-shell',
	templateUrl: './shell.component.html'
})
export class UitShell extends UitElement {
	/**
	 * Creates a new instance of the UitShell class.
	 */
	constructor() {
		super();
		this.class = 'uit-shell';
	}
}
