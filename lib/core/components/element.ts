import { Input, HostBinding, HostListener } from '@angular/core';
import { HorizontalAlignment } from '../enums/horizontal-alignment.enum';
import { VerticalAlignment } from '../enums/vertical-alignment.enum';
/**
 * UitElement is a base class for component core level implementations
 * building on Angular elements and basic presentation characteristics.
 */
export class UitElement {
	/**
	 * Provides the main component class.
	 */
	@HostBinding('class')
	protected class: string;
	/**
	 * Provides the horizontal alignment class for left aligned elements.
	 */
	@HostBinding('class.horizontal-align-left')
	private	alignLeft: boolean;
	/**
	 * Provides the horizontal alignment class for right aligned elements.
	 */
	@HostBinding('class.horizontal-align-rigth')
	private	alignRight: boolean;
	/**
	 * Provides the horizontal alignment class for centered elements.
	 */
	@HostBinding('class.horizontal-align-center')
	private	alignCenter: boolean;
	/**
	 * Provides the horizontal alignment class for stretched elements.
	 */
	@HostBinding('class.horizontal-align-stretch')
	private	alignStretch: boolean;
	/**
	 * Gets or sets a value to define the horizontal alignment of the component.
	 */
	@Input()
	public set horizontalAlignment(value: HorizontalAlignment) {
		this.horiztonalAlignmentInternal = value;
		this.setAlignment();
	}
	public get horizontalAlignment(): HorizontalAlignment {
		return this.horiztonalAlignmentInternal;
	}
	/**
	 * Gets or sets a value to define the vertical alignment of the component.
	 */
	@Input()
	public verticalAlignment: VerticalAlignment;
	/**
	 * Gets or sets a value indicating whether this element is disabled in the user interface.
	 */
	@Input()
	public disabled: boolean;
	/**
	 * Gets a value indicating whether the mouse pointer is located over this element.
	 */
	public isMouseOver: boolean;
	/**
	 * Gets a value that determines whether this element has logical focus.
	 */
	public isFocused: boolean;
	/**
	 * Internal property to define the horizontal alignment of the component.
	 */
	private horiztonalAlignmentInternal: HorizontalAlignment;
	/**
	 * Creates a new instance of UiElement class.
	 */
	constructor() {
		this.setAlignment();
	}
	/**
	 * Invoked when an mouseenter event is raised on this element.
	 */
	@HostListener('mouseenter')
	private onMouseEnter() {
		this.isMouseOver = true;
	}
	/**
	 * Invoked when an mouseleave event is raised on this element.
	 */
	@HostListener('mouseleave')
	private onMouseLeave() {
		this.isMouseOver = false;
	}
	/**
	 * Sets the alignment classes depending on the given values.
	 */
	private setAlignment(): void {
		if (!this.horiztonalAlignmentInternal) {
			this.alignStretch = true;
			return;
		}
		this.alignLeft = this.horiztonalAlignmentInternal === HorizontalAlignment.left;
		this.alignRight = this.horiztonalAlignmentInternal === HorizontalAlignment.right;
		this.alignCenter = this.horiztonalAlignmentInternal === HorizontalAlignment.center;
		this.alignStretch = this.horiztonalAlignmentInternal === HorizontalAlignment.stretch;
	}
}
