import {
	Directive,
	ElementRef,
	HostListener,
	Injectable,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	RendererFactory2
} from '@angular/core';
import { IScrollBarOptions } from '../interfaces/scrollbar-options.interface';
/**
 * ToDo: comment
 */
@Directive({
	selector: '[uitScrollBar]'
})
export class UitScrollBarDirective implements OnInit, OnDestroy {
	private me: HTMLElement;
	private bar: HTMLDivElement;
	private rail: HTMLDivElement;
	private isOverPanel: boolean;
	private isOverBar: boolean;
	private isDragg: boolean;
	private touchDif: number;
	private barHeight: number;
	private percentScroll: number;
	private lastScroll: number;
	private minBarHeight: number;
	private releaseScroll: boolean;
	private options: IScrollBarOptions;
	private defaults: IScrollBarOptions;
	private previousHeight: number;
	private queueHide: number;
	private changesTracker: number;
	private barMouseDownPageY: number;
	private startBarTop: number;
	private renderer: Renderer2;

	/**
	 * Creates a new instance of UitScrollBarDirective class.
	 */
	constructor(rendererFactory: RendererFactory2,
							elementRef: ElementRef) {
		this.minBarHeight = 30;
		this.releaseScroll = false;
		this.renderer = rendererFactory.createRenderer(null, null);
		this.me = elementRef.nativeElement;
		this.options = {
			width: '100%',
			height: '100%',
			size: '16px',
			color: '#ff0000',
			position: 'right',
			distance: '0px',
			start: 'top',
			opacity: 1,
			transition: 0,
			alwaysVisible: true,
			disableFadeOut: false,
			railVisible: true,
			railColor: '#0000ff',
			railOpacity: 1,
			railClass: 'slimScrollRail',
			barClass: 'slimScrollBar',
			wrapperClass: 'slimScrollDiv',
			allowPageScroll: false,
			wheelStep: 20,
			touchScrollStep: 200,
			borderRadius: '0px',
			railBorderRadius: '0px',
			scrollTo: 0,
			autoScrollToBottom: false,
			maxHeightBeforeEnable: undefined,
		};
	}

	public ngOnInit(): void {
		this.init();
	}

	public ngOnDestroy(): void {
		if (this.changesTracker) {
			clearInterval(this.changesTracker);
		}

		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', this.onWheel);
			window.removeEventListener('mousewheel', this.onWheel);
		} else {
			document.removeEventListener('mousewheel', this.onWheel);
		}

		document.removeEventListener('mousemove', this.barMouseMove, false);
		document.removeEventListener('mouseup', this.barMouseUp, false);
	}

	@HostListener('window:resize', ['$event'])
	public onResize(): void {
		this.init();
	}

	@Input()
	public set width(value: string) {
		this.options.width = value || this.defaults.width;
	}

	@Input()
	public set height(value: string) {
		this.options.height = value || this.defaults.height;
	}

	@Input()
	public set size(value: string) {
		this.options.size = value || this.defaults.size;
	}

	@Input()
	public set color(value: string) {
		this.options.color = value || this.defaults.color;
	}

	@Input()
	public set position(value: string) {
		this.options.position = value || this.defaults.position;
	}

	@Input()
	public set distance(value: string) {
		this.options.distance = value || this.defaults.distance;
	}

	@Input()
	public set start(value: string) {
		this.options.start = value || this.defaults.start;
	}

	@Input()
	public set opacity(value: number) {
		this.options.opacity = value || this.defaults.opacity;
	}

	@Input()
	public set transition(value: number) {
		this.options.transition = value || this.defaults.transition;
	}

	@Input()
	public set alwaysVisible(value: boolean) {
		this.options.alwaysVisible = value || this.defaults.alwaysVisible;
	}

	@Input()
	public set disableFadeOut(value: boolean) {
		this.options.disableFadeOut = value || this.defaults.disableFadeOut;
	}

	@Input()
	public set railVisible(value: boolean) {
		this.options.railVisible = value || this.defaults.railVisible;
	}

	@Input()
	public set railColor(value: string) {
		this.options.railColor = value || this.defaults.railColor;
	}

	@Input()
	public set railOpacity(value: number) {
		this.options.railOpacity = value || this.defaults.railOpacity;
	}

	@Input()
	public set railClass(value: string) {
		this.options.railClass = value || this.defaults.railClass;
	}

	@Input()
	public set barClass(value: string) {
		this.options.barClass = value || this.defaults.barClass;
	}

	@Input()
	public set wrapperClass(value: string) {
		this.options.wrapperClass = value || this.defaults.wrapperClass;
	}

	@Input()
	public set allowPageScroll(value: boolean) {
		this.options.allowPageScroll = value || this.defaults.allowPageScroll;
	}

	@Input()
	public set wheelStep(value: number) {
		this.options.wheelStep = value || this.defaults.wheelStep;
	}

	@Input()
	public set touchScrollStep(value: number) {
		this.options.touchScrollStep = value || this.defaults.touchScrollStep;
	}

	@Input()
	public set borderRadius(value: string) {
		this.options.borderRadius = value || this.defaults.borderRadius;
	}

	@Input()
	public set railBorderRadius(value: string) {
		this.options.railBorderRadius = value || this.defaults.railBorderRadius;
	}

	@Input()
	public set scrollTo(value: number) {
		this.options.scrollTo = value || this.defaults.scrollTo;
	}

	@Input()
	public set autoScrollToBottom(value: boolean) {
		this.options.autoScrollToBottom = value || this.defaults.autoScrollToBottom;
	}

	@Input()
	public set maxHeightBeforeEnable(value: number) {
		this.options.maxHeightBeforeEnable = value || this.defaults.maxHeightBeforeEnable;
	}

	private init(): void {
		if (this.bar && this.rail) {
			this.refresh();
		} else {
			this.setup();
		}
	}

	private trackPanelHeightChanged = (): void => {
		this.previousHeight = this.me.scrollHeight;

		this.changesTracker = window.setInterval(() => {
			if (this.previousHeight !== this.me.scrollHeight) {
				this.previousHeight = this.me.scrollHeight;

				this.init();

				if (this.options.autoScrollToBottom) {
					this.renderer.setStyle(this.bar, 'top', this.me.offsetHeight - this.bar.offsetHeight + 'px');
					this.scrollContent(0, true);
				}
			}
			console.log('INTERVAL!!!!!');
		}, 1000);
	}

	private hasParentClass = (e: HTMLElement, className: string): boolean => {
		if (!e) {
			return false;
		}

		if (e.classList.contains(this.options.wrapperClass)) {
			return true;
		}

		return this.hasParentClass(e.parentElement, className);
	}

	private onWheel = (e: MouseWheelEvent): void => {
		if (!this.isOverPanel) {
			return;
		}

		let delta = 0;
		if (e.wheelDelta) {
			delta = -e.wheelDelta / 120;
		}
		if (e.detail) {
			delta = e.detail / 3;
		}

		const target = (e.target || e.currentTarget || e.relatedTarget) as HTMLElement;
		if (this.hasParentClass(target, this.options.wrapperClass)) {
			this.scrollContent(delta, true);
		}
		if (e.preventDefault && !this.releaseScroll) {
			e.preventDefault();
		}
		if (!this.releaseScroll) {
			e.returnValue = false;
		}
	}

	private attachWheel = (target: Window): void => {
		if (window.addEventListener) {
			target.addEventListener('DOMMouseScroll', this.onWheel, false);
			target.addEventListener('mousewheel', this.onWheel, false);
		} else {
			document.addEventListener('mousewheel', this.onWheel, false);
		}
	}

	private showBar = (): void => {
		this.getBarHeight();
		clearTimeout(this.queueHide || 0);

		// when bar reached top or bottom
		// if (this.percentScroll === ~~this.percentScroll) {
		if (this.percentScroll === this.percentScroll) {
			this.releaseScroll = this.options.allowPageScroll;
		} else {
			this.releaseScroll = false;
		}

		this.lastScroll = this.percentScroll;

		// show only when required
		if (this.barHeight >= this.me.offsetHeight) {
			// allow window scroll
			this.releaseScroll = true;
			return;
		}

		this.renderer.setStyle(this.bar, 'opacity', this.options.opacity.toString());
		this.renderer.setStyle(this.rail, 'opacity', this.options.railOpacity.toString());
	}

	private hideBar = (): void => {
		if (
			!this.options.alwaysVisible
			&& !(this.options.disableFadeOut && this.isOverPanel)
			&& !this.isOverBar
			&& !this.isDragg
		) {
			this.queueHide = window.setTimeout(() => {
				this.renderer.setStyle(this.bar, 'opacity', '0');
				this.renderer.setStyle(this.rail, 'opacity', '0');
			}, 1000);
		}
	}

	public scrollContent = (y: number, isWheel: boolean, isJump: boolean = false) => {
		this.releaseScroll = false;
		let delta: number = y;
		const maxTop: number = this.me.offsetHeight - this.bar.offsetHeight;

		if (isWheel) {
			// move bar with mouse wheel
			delta = parseInt(this.bar.style.top, 10) + y * this.options.wheelStep / 100 * this.bar.offsetHeight;

			// move bar, make sure it doesn"t go out
			delta = Math.min(Math.max(delta, 0), maxTop);

			// if scrolling down, make sure a fractional change to the
			// scroll position isn"t rounded away when the scrollbar"s CSS is set
			// this flooring of delta would happened automatically when
			// bar.css is set below, but we floor here for clarity
			delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

			// scroll the scrollbar
			this.renderer.setStyle(this.bar, 'top', delta + 'px');
		}

		// calculate actual scroll amount
		this.percentScroll = parseInt(this.bar.style.top, 10) / (this.me.offsetHeight - this.bar.offsetHeight);
		delta = this.percentScroll * (this.me.scrollHeight - this.me.offsetHeight);

		if (isJump) {
			delta = y;
			let offsetTop = delta / this.me.scrollHeight * this.me.offsetHeight;
			offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
			this.renderer.setStyle(this.bar, 'top', offsetTop + 'px');
		}

		// scroll content
		this.me.scrollTop = delta;

		// ensure bar is visible
		this.showBar();

		// trigger hide when scroll is stopped
		this.hideBar();
	}

	private getBarHeight(): void {
		// calculate scrollbar height and make sure it is not too small
		this.barHeight =
			Math.max(
				this.me.offsetHeight / (this.me.scrollHeight === 0
																	? 1
																	: this.me.scrollHeight
																) * this.me.offsetHeight, this.minBarHeight);
		this.renderer.setStyle(this.bar, 'height', this.barHeight + 'px');
		const display = this.barHeight === this.me.offsetHeight ? 'none' : 'block';
		this.renderer.setStyle(this.bar, 'display', display);
	}

	private refresh(): void {
		this.getBarHeight();
		if ('height' in this.options && this.options.height === 'auto') {
			this.renderer.setStyle(this.me.parentElement, 'height', 'auto');
			this.renderer.setStyle(this.me, 'height', 'auto');
			const height = this.me.parentElement.clientHeight;
			this.renderer.setStyle(this.me.parentElement, 'height', height + 'px');
			this.renderer.setStyle(this.me, 'height', height + 'px');
		} else if ('height' in this.options) {
			const h = this.options.height;
			this.renderer.setStyle(this.me.parentElement, 'height', h);
			this.renderer.setStyle(this.me, 'height', h);
		}
	}

	private railMouseDown = (event: MouseEvent) => {
		const clientRects = this.rail.getBoundingClientRect();
		const elementOffsetTop = clientRects.top + window.scrollY;
		const moveTo = event.pageY - elementOffsetTop - (this.barHeight / 2);
		const scrollTo = this.me.scrollHeight * (moveTo / clientRects.height);
		this.renderer.setStyle(this.bar, 'top', (moveTo >= 0 ? moveTo : 0) + 'px');

		this.scrollContent(scrollTo, false, true);
	}

	private barMouseMove = (event: MouseEvent) => {
		const currTop = this.startBarTop + event.pageY - this.barMouseDownPageY;
		this.renderer.setStyle(this.bar, 'top', (currTop >= 0 ? currTop : 0) + 'px');
		const position = this.bar.getClientRects()[0];

		if (position) {
			this.scrollContent(0, position.top > 0);
		}
	}

	private barMouseUp = () => {
		this.isDragg = false;

		// return normal text selection
		const body = document.body;
		this.renderer.setStyle(body, '-webkit-user-select', 'initial');
		this.renderer.setStyle(body, '-moz-user-select', 'initial');
		this.renderer.setStyle(body, '-ms-user-select', 'initial');
		this.renderer.setStyle(body, 'user-select', 'initial');

		this.hideBar();

		document.removeEventListener('mousemove', this.barMouseMove, false);
		document.removeEventListener('mouseup', this.barMouseUp, false);
	}

	private barMouseDown = (e) => {
		this.isDragg = true;

		// disable text selection
		const body = document.body;
		this.renderer.setStyle(body, '-webkit-user-select', 'none');
		this.renderer.setStyle(body, '-moz-user-select', 'none');
		this.renderer.setStyle(body, '-ms-user-select', 'none');
		this.renderer.setStyle(body, 'user-select', 'none');


		this.barMouseDownPageY = e.pageY;
		this.startBarTop = parseFloat(this.bar.style.top);

		document.addEventListener('mousemove', this.barMouseMove, false);
		document.addEventListener('mouseup', this.barMouseUp, false);

		return false;
	}

	private setup = (): void => {
		// check whether it changes in content
		this.trackPanelHeightChanged();

		if (this.options.maxHeightBeforeEnable && this.me.scrollHeight <= this.options.maxHeightBeforeEnable) {
			return;
		}

		// wrap content
		const wrapper = document.createElement('div');
		this.renderer.addClass(wrapper, this.options.wrapperClass);
		this.renderer.setStyle(wrapper, 'position', 'relative');
		this.renderer.setStyle(wrapper, 'overflow', 'hidden');
		this.renderer.setStyle(wrapper, 'width', this.options.width);
		this.renderer.setStyle(wrapper, 'height', this.options.height);

		// update style for the div
		this.renderer.setStyle(this.me, 'overflow', 'hidden');
		this.renderer.setStyle(this.me, 'width', this.options.width);
		this.renderer.setStyle(this.me, 'height', this.options.height);

		// create scrollbar rail
		this.rail = document.createElement('div');
		this.renderer.addClass(this.rail, this.options.railClass);
		this.renderer.setStyle(this.rail, 'width', this.options.size);
		this.renderer.setStyle(this.rail, 'height', '100%');
		this.renderer.setStyle(this.rail, 'position', 'absolute');
		this.renderer.setStyle(this.rail, 'top', '0');
		this.renderer.setStyle(this.rail, 'display', this.options.railVisible ? 'block' : 'none');
		this.renderer.setStyle(this.rail, 'border-radius', this.options.railBorderRadius);
		this.renderer.setStyle(this.rail, 'background', this.options.railColor);
		this.renderer.setStyle(this.rail, 'opacity', this.options.railOpacity.toString());
		this.renderer.setStyle(this.rail, 'transition', `opacity ${this.options.transition}s`);
		this.renderer.setStyle(this.rail, 'z-index', '90');

		// create scrollbar
		this.bar = document.createElement('div');
		this.renderer.addClass(this.bar, this.options.barClass);
		this.renderer.setStyle(this.bar, 'background', this.options.color);
		this.renderer.setStyle(this.bar, 'width', this.options.size);
		this.renderer.setStyle(this.bar, 'position', 'absolute');
		this.renderer.setStyle(this.bar, 'top', '0');
		this.renderer.setStyle(this.bar, 'opacity', this.options.opacity.toString());
		this.renderer.setStyle(this.bar, 'transition', `opacity ${this.options.transition}s`);
		this.renderer.setStyle(this.bar, 'display', this.options.alwaysVisible ? 'block' : 'none');
		this.renderer.setStyle(this.bar, 'border-radius', this.options.borderRadius);
		this.renderer.setStyle(this.bar, 'webkit-border-radius', this.options.borderRadius);
		this.renderer.setStyle(this.bar, 'moz-border-radius', this.options.borderRadius);
		this.renderer.setStyle(this.bar, 'z-index', '99');

		// set position
		if (this.options.position === 'right') {
			this.renderer.setStyle(this.rail, 'right', this.options.distance);
			this.renderer.setStyle(this.bar, 'right', this.options.distance);
		} else {
			this.renderer.setStyle(this.rail, 'left', this.options.distance);
			this.renderer.setStyle(this.bar, 'left', this.options.distance);
		}

		// wrap it
		this.me.parentElement.insertBefore(wrapper, this.me);
		wrapper.appendChild(this.me);

		if (this.options.scrollTo > 0) {
			// jump to a static point
			this.scrollContent(this.options.scrollTo, false, true);
		}

		// append to parent div
		this.me.parentElement.appendChild(this.bar);
		this.me.parentElement.appendChild(this.rail);

		this.bar.addEventListener('mousedown', this.barMouseDown, false);

		// on rail over
		this.rail.addEventListener('mouseenter', this.showBar, false);
		this.rail.addEventListener('mouseleave', this.hideBar, false);

		this.rail.addEventListener('mousedown', this.railMouseDown, false);

		// on bar over
		this.bar.addEventListener('mouseenter', () => this.isOverBar = true, false);
		this.bar.addEventListener('mouseleave', () => this.isOverBar = false, false);

		// show on parent mouseover
		this.me.addEventListener('mouseenter', () => {
			this.isOverPanel = true;
			this.showBar();
			this.hideBar();
		}, false);
		this.me.addEventListener('mouseleave', () => {
			this.isOverPanel = false;
			this.hideBar();
		}, false);

		// support for mobile
		this.me.addEventListener('touchstart', e => {
			if (e.touches.length) {
				// record where touch started
				this.touchDif = e.touches[0].pageY;
			}
		}, false);

		this.me.addEventListener('touchmove', e => {
			// prevent scrolling the page if necessary
			if (!this.releaseScroll) {
				e.preventDefault();
			}
			if (e.touches.length) {
				// see how far user swiped
				const diff = (this.touchDif - e.touches[0].pageY) / this.options.touchScrollStep;
				// scroll content
				this.scrollContent(diff, true);
				this.touchDif = e.touches[0].pageY;
			}
		}, false);
		// set up initial height
		this.getBarHeight();

		// hide bar on init if alwaysVisible equal false
		this.hideBar();

		// check start position
		if (this.options.start === 'bottom') {
			// scroll content to bottom
			this.renderer.setStyle(this.bar, 'top', this.me.offsetHeight - this.bar.offsetHeight + 'px');
			this.scrollContent(0, true);
		}

		// attach scroll events
		this.attachWheel(window);
	}
}
