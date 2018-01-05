import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitTreeViewItem } from './tree-view-item.component';
export * from './tree-view-item.component';

import { UitTreeView } from './tree-view.component';
export * from './tree-view.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UitTreeViewItem,
		UitTreeView
	],
	exports: [
		UitTreeViewItem,
		UitTreeView
	]
})
export class UitTreeModule { }
