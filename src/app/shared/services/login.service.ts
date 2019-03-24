import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {User} from '../models/user';
import {map} from 'rxjs/operators';

interface LoginUser extends User {
	password: string;
}

@Injectable({
	providedIn: 'root'
})

export class LoginService {

	constructor(private http: HttpClient) {
	}

	login(user: LoginUser): Observable<any> {
		// TODO: emit back-end response (must be post method)
		return this.http.get(
			`${environment.apiUrl}/users/?email=^${encodeURIComponent(user.email)}$&password=^${encodeURIComponent(user.password)}$`
		)
		// TODO: emit back-end response
			.pipe(
				map((users$: LoginUser[]) => {
					return users$.length ? new User(users$[0]) : null;
				})
			);
	}

	checkEmail(email: string): Observable<any> {
		return this.http.get(`${environment.apiUrl}/users/?email=^${encodeURIComponent(email)}$`);
	}
}
