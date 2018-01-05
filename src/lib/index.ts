import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UitShellModule } from './shell/shell.module';
import { UitNavigationModule } from './navigation/navigation.module';
import { UitButtonModule } from './button/button.module';
import { UitToggleButtonModule } from './toggle-button/toggle-button.module';
import { UitTextboxModule } from './textbox/textbox.module';
import { UitCheckboxModule } from './checkbox/checkbox.module';
import { UitRadioModule } from './radio/radio.module';
import { UitGroupBoxModule } from './group-box/group-box.module';

export * from './shell/shell.module';
export * from './navigation/navigation.module';
export * from './button/button.module';
export * from './toggle-button/toggle-button.module';
export * from './textbox/textbox.module';
export * from './checkbox/checkbox.module';
export * from './radio/radio.module';
export * from './group-box/group-box.module';

export * from './core/interfaces';

@NgModule({
	exports: [
		UitShellModule,
		UitNavigationModule,
		UitButtonModule,
		UitToggleButtonModule,
		UitTextboxModule,
		UitCheckboxModule,
		UitRadioModule,
		UitGroupBoxModule
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
