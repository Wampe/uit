import { Component, HostBinding, Input } from '@angular/core';
import { UitButtonBase } from '../core/components/button-base';
import { INavigation } from '../core/Interfaces/navigation.interface';
/**
	* Represents a Angular component, which is a child element of a UitNavigation component.
 */
@Component({
	selector: 'uit-navigation-item',
	templateUrl: './navigation-item.component.html'
})
export class UitNavigationItem extends UitButtonBase implements INavigation {
	/**
	 * Gets or sets a value that will get displayed as link text.
	 */
	@Input()
	public label: string;
	/**
	 * Gets or sets a value that is used as destination path for the Angular router.
	 */
	@Input()
	public path: string;
	/**
	 * Creates a new instance of the UitNavigationItem class.
	 */
	constructor() {
		super();
		this.class = 'uit-navigation-item';
		this.path = '/';
	}
}
