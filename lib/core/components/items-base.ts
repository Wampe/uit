import {
	AfterContentInit,
	AfterViewInit,
	Input,
	ContentChildren,
	QueryList,
	ViewChildren
} from '@angular/core';
import { UitElement } from './element';
/**
 * Represents the base class for all items components.
 */
export class UitItemsBase extends UitElement implements AfterContentInit, AfterViewInit {
	/**
	 * Gets or sets a value that helds a itemssource collection.
	 */
	@Input()
	public items: any[];
	/**
	 * Configures a content query with the corresponding items.
	 */
	@ContentChildren('NavigationItem')
	protected contentChildren: QueryList<any>;
	/**
	 * Configures a view query with the corresponding items.
	 */
	@ViewChildren('NavigationItem')
	protected viewChildren: QueryList<any>;
	/**
	 * Creates a new instance of the UitItemsBase class.
	 */
	constructor() {
		super();
	}
	/**
	 * Lifecycle hook that is called after a directive's content has been fully initialized.
	 */
	public ngAfterContentInit(): void {
		// ToDo: Handle content children
	}
	/**
	 * Lifecycle hook that is called after a component's view has been fully initialized.
	 */
	public ngAfterViewInit(): void {
		// ToDo: Handle view children
	}
}
