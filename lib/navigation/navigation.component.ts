import { Component } from '@angular/core';
import { UitItemsBase } from '../core/components/items-base';
/**
 * Represents a Angular items component, which provides a iteration of UitNavigationItem elements.
 */
@Component({
	selector: 'uit-navigation',
	templateUrl: './navigation.component.html'
})
export class UitNavigation extends UitItemsBase {
	/**
	 * Creates a new instance of the UitNavigation class.
	 */
	constructor() {
		super();
		this.class = 'uit-navigation';
	}
}
