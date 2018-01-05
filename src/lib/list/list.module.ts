import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
		UitListBoxItem,
		UitListBox
	],
	exports: [
		UitListBoxItem,
		UitListBox
	]
})
export class UitListModule { }
