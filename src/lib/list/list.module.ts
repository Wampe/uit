import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UitScrollBarDirective } from '../core/scrolling/scrollbar.directive';
import { UitVirtualScroll } from '../core/scrolling/virtual-scroll.component';
import { UitItemTemplateDirective } from './item-template.directive';
import { UitListBoxItem } from './list-box-item.component';
import { UitListBox } from './list-box.component';

export * from './list-box.component';
export * from './list-box-item.component';
export * from './item-template.directive';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		UitScrollBarDirective,
		UitVirtualScroll,
		UitItemTemplateDirective,
		UitListBoxItem,
		UitListBox
	],
	exports: [
		UitItemTemplateDirective,
		UitListBoxItem,
		UitListBox
	]
})
export class UitListModule { }
