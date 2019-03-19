import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
	animations: [
		trigger('openClose', [
			state('open', style({
				backgroundColor: 'green'
			})),
			state('close', style({
				backgroundColor: 'red'
			})),
			transition('open => close', [
				animate('.5s')
			]),
			transition('close => open', [
				animate('.3s')
			])
		])
	]
})

export class CoreComponent implements OnInit {
	users: User[];
	buttonIsOpen: boolean;

	constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
		this.buttonIsOpen = false;
		console.log(this.userService.getUser());
	}

	ngOnInit() {
		this.users = this.activatedRoute.snapshot.data.users;
	}

	onClick() {
		this.buttonIsOpen = !this.buttonIsOpen;
	}
}
