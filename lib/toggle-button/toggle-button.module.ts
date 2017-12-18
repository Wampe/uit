import { NgModule } from '@angular/core';

import { UitToggleButtonComponent } from './toggle-button.component';
export * from './toggle-button.component';

@NgModule({
	declarations: [
		UitToggleButtonComponent
	],
	exports: [
		UitToggleButtonComponent
	]
})
export class UitToggleButtonModule { }
