import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../shared/models/user';

@Injectable({
	providedIn: 'root'
})

export class CoreService {
	constructor(private http: HttpClient) {
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>('/app/users');
	}
}
