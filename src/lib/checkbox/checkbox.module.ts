import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitCheckbox } from './checkbox.component';
export * from './checkbox.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitCheckbox
	],
	exports: [
		UitCheckbox
	]
})
export class UitCheckboxModule { }
