import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitComponent } from './uit.component';
export * from './uit.component';

import { UitDirective } from './uit.directive';
export * from './uit.directive';

import { UitPipe } from './uit.pipe';
export * from './uit.pipe';

import { UitService } from './uit.service';
export * from './uit.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitComponent,
		UitDirective,
		UitPipe
	],
	exports: [
		UitComponent,
		UitDirective,
		UitPipe
	],
	providers: [UitService]
})
export class UitModule {
	protected static forRoot(): ModuleWithProviders {
		return {
			ngModule: UitModule,
			providers: [UitService]
		};
	}
}
