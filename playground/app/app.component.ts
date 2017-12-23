import { Component } from '@angular/core';
import { INavigation } from '@wampe/uit';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'app';

	public textValue = 'ProeprtyChanged';
	public textValue2 = 'Disabled';
	public textValue3 = 'Lost Focus';
	public numberValue: number;

	public navigation: INavigation[] = [
		{
			label: 'Home',
			path: '/'
		},
		{
			label: 'Events',
			path: '/'
		},
		{
			label: 'Groups',
			path: '/'
		},
		{
			label: 'Guestbook',
			path: '/'
		},
	];

	public hello(): void {
		alert('Clicked');
	}
}
