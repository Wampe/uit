import { NgModule } from '@angular/core';

import { UitToggleButton } from './toggle-button.component';
export * from './toggle-button.component';

@NgModule({
	declarations: [
		UitToggleButton
	],
	exports: [
		UitToggleButton
	]
})
export class UitToggleButtonModule { }
