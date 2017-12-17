import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[uitDirective]'
})
export class UitDirective {
	constructor(private element: ElementRef) {}
}
