import {
	EventEmitter,
	HostListener,
	Input,
	Output,
	Type
} from '@angular/core';
import { UitElement } from './element';
import { ClickMode } from '../enums/click-mode.enum';
/**
 * Represents the base class for all button components.
 */
export class UitButtonBase extends UitElement {
	/**
	 * Emits the event that provides the click handler of the button element.
	 */
	@Output()
	public clicked: EventEmitter<MouseEvent>;
	/**
	 * Gets or sets when the clicked event occurs.
	 */
	@Input()
	public clickMode: ClickMode;
	/**
	 * Gets a value that indicates whether a UitButtonBase element is currently activated.
	 */
	protected isPressed: boolean;
	/**
	 * Creates a new instance of UitButtonBase class.
	 */
	constructor() {
		super();
		this.clickMode = ClickMode.press;
		this.clicked = new EventEmitter<MouseEvent>();
	}
	/**
	 * Invoked when an mousedown event is raised on this element.
	 */
	@HostListener('mousedown', ['$event'])
	protected onMouseDown(event: MouseEvent) {
		if (event.button === 0) {
			this.isPressed = true;
		}
		if (this.clickMode === ClickMode.press) {
			this.clicked.emit(event);
		}
	}
	/**
	 * Invoked when an mouseup event is raised on this element.
	 */
	@HostListener('mouseup', ['$event'])
	protected onMouseUp(event: MouseEvent) {
		if (event.button === 0) {
			this.isPressed = false;
		}
		if (this.clickMode === ClickMode.release) {
			this.clicked.emit(event);
		}
	}
}
