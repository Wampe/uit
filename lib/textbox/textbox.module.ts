import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UitButtonModule } from '../button/button.module';

import { UitTextbox } from './textbox.component';
export * from './textbox.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UitButtonModule
	],
	declarations: [
		UitTextbox
	],
	exports: [
		UitTextbox
	]
})
export class UitTextboxModule { }
