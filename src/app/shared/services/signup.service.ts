import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';
import {User} from '../models/user';
import {map} from 'rxjs/operators';

interface SignupUser extends User {
	confirm_password: string;
	password: string;
}

@Injectable({
	providedIn: 'root'
})

export class SignupService {

	constructor(private http: HttpClient) {
	}

	signup(user: SignupUser): Observable<any> {
		return this.http.post(`${environment.apiUrl}/users`, {
			name: user.name,
			email: user.email,
			password: user.password,
			confirm_password: user.confirm_password
		})
		// TODO: emit back-end response
			.pipe(
				map((user$: SignupUser) => {
					return {
						id: user$.id,
						name: user$.name,
						email: user$.email,
						bearerToken: 'mk234234k2',
						canAccessApp: true,
						isAuthenticated: true
					};
				})
			);
	}

	checkEmail(email: string): Observable<any> {
		return this.http.get(`${environment.apiUrl}/users/?email=${encodeURIComponent(email)}`);
	}
}
