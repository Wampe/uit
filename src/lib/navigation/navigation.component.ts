import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemsElement } from '../core/components/items-element';
/**
 * Represents a Angular items component, which provides a iteration of UitNavigationItem elements.
 */
@Component({
	selector: 'uit-navigation',
	templateUrl: './navigation.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitNavigation),
			multi: true
		}
	]
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
