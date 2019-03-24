import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

	getUser(email: string): Observable<User> {
		return this.http.get<User>(`/app/users/?email=${encodeURIComponent(email)}`);
	}
}
