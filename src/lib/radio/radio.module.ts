import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitRadioGroup } from './radio-group.component';
export * from './radio-group.component';

import { UitRadioButton } from './radio-button.component';
export * from './radio-button.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitRadioGroup,
		UitRadioButton
	],
	exports: [
		UitRadioGroup,
		UitRadioButton
	]
})
export class UitRadioModule { }
