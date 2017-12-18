import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitButtonComponent } from './button.component';
export * from './button.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitButtonComponent
	],
	exports: [
		UitButtonComponent
	]
})
export class UitButtonModule { }
