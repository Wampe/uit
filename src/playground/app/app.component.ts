import { Component } from '@angular/core';
import { INavigation } from '@wampe/uit';

export interface ITreeViewData {
	header: string;
	items?: ITreeViewData[];
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public treeView: ITreeViewData[];
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
			path: '/home'
		},
		{
			label: 'Events',
			path: '/events'
		},
		{
			label: 'Groups',
			path: '/groups'
		},
		{
			label: 'Guestbook',
			path: '/guestbook'
		},
	];

	constructor() {
		this.treeView = [{
			header: 'TreeView 1',
			items: [{
				header: 'TreeView 1_1'
			},
			{
				header: 'TreeView 1_2'
			},
			{
				header: 'TreeView 1_3'
			},
			{
				header: 'TreeView 1_4'
			}]
		},
		{
			header: 'TreeView 2',
			items: [{
				header: 'TreeView 2_1'
			},
			{
				header: 'TreeView 2_2',
				items: [{
					header: 'TreeView 2_2_1'
				},
				{
					header: 'TreeView 2_2_2'
				},
				{
					header: 'TreeView 2_2_3'
				},
				{
					header: 'TreeView 2_2_4',
					items: [{
						header: 'TreeView 2_2_4_1'
					},
					{
						header: 'TreeView 2_2_4_2'
					},
					{
						header: 'TreeView 2_2_4_3'
					},
					{
						header: 'TreeView 2_2_4_4'
					}]
				}]
			},
			{
				header: 'TreeView 2_3'
			},
			{
				header: 'TreeView 2_4'
			}]
		},
		{
			header: 'TreeView 3'
		},
		{
			header: 'TreeView 4'
		},
		{
			header: 'TreeView 5',
			items: [{
				header: 'TreeView 5_1'
			},
			{
				header: 'TreeView 5_2'
			},
			{
				header: 'TreeView 5_3'
			},
			{
				header: 'TreeView 5_4'
			}]
		}];
	}

	public hello(): void {
		alert('Clicked');
	}
}
