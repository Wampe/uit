import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UitModule } from '@wampe/uit';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([]),
		UitModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
