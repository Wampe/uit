import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitGroupBox } from './group-box.component';
export * from './group-box.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitGroupBox
	],
	exports: [
		UitGroupBox
	]
})
export class UitGroupBoxModule { }
