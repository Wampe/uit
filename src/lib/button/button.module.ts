import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitButton } from './button.component';
export * from './button.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitButton
	],
	exports: [
		UitButton
	]
})
export class UitButtonModule { }
