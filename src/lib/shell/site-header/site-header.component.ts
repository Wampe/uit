import { Component } from '@angular/core';
import { UitElement } from '../../core/components/element';
/**
 * Represents a Angular component, which provides a header element.
 */
@Component({
	selector: 'uit-site-header',
	templateUrl: './site-header.component.html'
})
export class UitSiteHeader extends UitElement {
	/**
	 * Creates a new instance of the UiSiteHeader class.
	 */
	constructor() {
		super();
		this.class = 'uit-site-header';
	}
}
