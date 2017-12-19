import { Component } from '@angular/core';
import { UitElement } from '../../core/components/element';
/**
 * Represents a Angular component, which provides a footer element.
 */
@Component({
	selector: 'uit-site-footer',
	templateUrl: './site-footer.component.html'
})
export class UitSiteFooter extends UitElement {
	/**
	 * Creates a new instance of the UitSiteFooter class.
	 */
	constructor() {
		super();
		this.class = 'uit-site-footer';
	}
}
