import { Component } from '@angular/core';
// import { UitItemsElement, UitButtonElement } from '../core/components/index';
import { UitNavigationItem } from './navigation-item.component';
import { UitItemsElement } from '../core/components/items-element';
import { UitButtonElement } from '../core/components/button-element';
/**
 * Represents a Angular items component, which provides a iteration of UitNavigationItem elements.
 */
@Component({
	selector: 'uit-navigation',
	templateUrl: './navigation.component.html'
})
export class UitNavigation extends UitItemsElement {
	/**
	 * Creates a new instance of the UitNavigation class.
	 */
	constructor() {
		super();
		this.class = 'uit-navigation';
	}
}
