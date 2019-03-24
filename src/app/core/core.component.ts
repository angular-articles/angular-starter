import {ActivatedRoute} from '@angular/router';
import {Component, Inject, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

import {User} from '../shared/models/user';
import {PlatformService} from 'src/app/shared/services/platform.service';

@Component({
	selector: 'app-home',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss']
})

export class CoreComponent implements OnInit {
	user: User;

	constructor(
		private platformService: PlatformService,
		private activatedRoute: ActivatedRoute,
		@Optional() @Inject(PLATFORM_ID) private platformId?: object
	) {
	}

	ngOnInit() {
		this.user = this.activatedRoute.snapshot.data.user;
		// console.log(isPlatformBrowser(this.platformId));
		console.log(this.platformService.mobile);
	}
}
