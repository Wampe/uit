import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UitShellModule } from './shell/shell.module';
export * from './shell/shell.module';

import { UitButtonModule } from './button/button.module';
export * from './button/button.module';

import { UitToggleButtonModule } from './toggle-button/toggle-button.module';
export * from './toggle-button/toggle-button.module';

@NgModule({
	exports: [
		UitShellModule,
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
