import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UitModule } from '@wampe/uit';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		UitModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
