import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {CoreService} from './core.service';
import {User} from '../shared/models/user';

@Injectable({
	providedIn: 'root'
})

export class CoreResolve implements Resolve<User[]> {
	constructor(private exampleService: CoreService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
		return this.exampleService.getUsers();
	}
}
