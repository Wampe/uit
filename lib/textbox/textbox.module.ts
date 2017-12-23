import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UitTextbox } from './textbox.component';
export * from './textbox.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		UitTextbox
	],
	exports: [
		UitTextbox
	]
})
export class UitTextboxModule { }
