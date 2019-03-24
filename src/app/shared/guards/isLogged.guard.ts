import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';

import {UserService} from '../services/user.service';

@Injectable({
	providedIn: 'root'
})

export class IsLoggedGuard implements CanActivate, CanLoad {
	constructor(private router: Router, private userService: UserService) {
	}

	canActivate() {
		return this.check();
	}

	canLoad() {
		return this.check();
	}

	private check() {
		if (this.userService.getUser.canAccessApp) {
			return true;
		}

		this.router.navigateByUrl('login');
		return false;
	}
}
