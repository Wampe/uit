import { NgModule } from '@angular/core';

import { UitShell } from './shell.component';
import { UitSiteHeader } from './site-header/site-header.component';
import { UitSiteFooter } from './site-footer/site-footer.component';

@NgModule({
	declarations: [
		UitShell,
		UitSiteHeader,
		UitSiteFooter
	],
	exports: [
		UitShell,
		UitSiteHeader,
		UitSiteFooter
	]
})
export class UitShellModule { }
