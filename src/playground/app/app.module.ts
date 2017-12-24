import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UitModule } from '@wampe/uit';

import { AppComponent } from './app.component';
import { StartComponent } from './views/start.component';

@NgModule({
	declarations: [
		AppComponent,
		StartComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
			{
				path: 'start',
				component: StartComponent
			}
		]),
		UitModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
