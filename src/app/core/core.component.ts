import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {User} from '../shared/models/user';

@Component({
	selector: 'app-home',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss']
})

export class CoreComponent implements OnInit {
	user: User;

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.user = this.activatedRoute.snapshot.data.user;
	}
}
