import { Component } from '@angular/core';
import { INavigation } from '@wampe/uit';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public listItems: string[] = ['Item 1', 'Item 2', 'item 3', 'Item 4'];
	public selectedNavigation: any;
	public selectedRadio = 'Bacon';
	public checkBox = true;
	public title = 'app';
	public requiredText: string;
	public textValue: string | number = '123';
	public textValue2 = 'Disabled';
	public textValue3 = 'Lost Focus';
	public numberValue: number;
	public email: string;
	public password: string;
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
