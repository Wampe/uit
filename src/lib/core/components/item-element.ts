import { EventEmitter, HostBinding, HostListener } from '@angular/core';
import { UitValueElement } from './value-element';
import { ISelectable } from '../interfaces/selectable.interface';
/**
 * Represents the base class for all selectable components.
 */
export class UitItemElement extends UitValueElement implements ISelectable {
	/**
	 * Emits the event that provides the click handler of the item element.
	 */
	public clicked: EventEmitter<void>;
	/**
	 * Gets a value that indicates whether a UitItemBase element is currently selected.
	 */
	@HostBinding('class.active')
	public isSelected: boolean;
	/**
	 * Creates a new instance of the UitItemElement class.
	 */
	constructor() {
		super();
		this.isSelected = false;
		this.clicked = new EventEmitter<void>();
	}
	/**
	 * Invoked when an click event is raised on this element.
	 */
	@HostListener('click')
	public onClick(): void {
		this.clicked.emit();
	}
}
