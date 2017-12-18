import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UitButtonModule } from './button/button.module';
export * from './button/button.module';

import { UitToggleButtonModule } from './toggle-button/toggle-button.module';
export * from './toggle-button/toggle-button.module';

@NgModule({
	exports: [
		UitButtonModule,
		UitToggleButtonModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class UitModule {
	protected static forRoot(): ModuleWithProviders {
		return {
			ngModule: UitModule
		};
	}
}
