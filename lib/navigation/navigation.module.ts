import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UitNavigation } from './navigation.component';
export * from './navigation.component';

import { UitNavigationItem } from './navigation-item.component';
export * from './navigation-item.component';

@NgModule({
	imports: [
		RouterModule
	],
	declarations: [
		UitNavigation,
		UitNavigationItem
	],
	exports: [
		UitNavigation,
		UitNavigationItem
	]
})
export class UitNavigationModule { }
