import {Injectable} from '@angular/core';

import {User} from '../models/user';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private user: User;

	constructor() {
		this.user = new User(JSON.parse(localStorage.getItem('user')) || undefined);
	}

	get getUser(): User {
		return this.user;
	}

	setUser(user: User): void {
		localStorage.setItem('user', JSON.stringify(user));
		this.user = user;
	}

	removeUser(): void {
		this.user = new User();
		localStorage.removeItem('user');
	}
}
