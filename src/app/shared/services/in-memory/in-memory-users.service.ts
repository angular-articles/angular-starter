import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryUsersService implements InMemoryDbService {
	createDb() {
		const users = [
			{
				id: 1,
				email: 'admin@angular.com',
				password: 'admin'
			}, {
				id: 2,
				email: 'user@angular.com',
				password: 'user'
			}
		];

		return {users};
	}
}
