import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UitNavigation } from './navigation.component';
export * from './navigation.component';

import { UitNavigationItem } from './navigation-item.component';
export * from './navigation-item.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		UitNavigationItem,
		UitNavigation
	],
	exports: [
		UitNavigationItem,
		UitNavigation
	]
})
export class UitNavigationModule { }
