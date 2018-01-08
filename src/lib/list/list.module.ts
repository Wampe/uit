import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UitItemTemplateDirective } from './item-template.directive';
export * from './item-template.directive';

import { UitListBoxItem } from './list-box-item.component';
export * from './list-box-item.component';

import { UitListBox } from './list-box.component';
export * from './list-box.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
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
