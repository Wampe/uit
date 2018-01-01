import {
	Component,
	forwardRef,
	Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UitItemElement } from '../core/components/item-element';
import { INavigation } from '../core/interfaces/navigation.interface';
import { ISelectable } from '../core/interfaces/selectable.interface';
/**
	* Represents a Angular component, which is a child element of a UitNavigation component.
 */
@Component({
	selector: 'uit-navigation-item',
	templateUrl: './navigation-item.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UitNavigationItem),
			multi: true
		},
		{
			provide: UitItemElement,
			useExisting: forwardRef(() => UitNavigationItem),
			multi: true
		}
	]
})
export class UitNavigationItem extends UitItemElement implements INavigation {
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
