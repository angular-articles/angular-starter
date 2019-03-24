import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';

export class InMemoryUsersService implements InMemoryDbService {
	createDb(reqInfo?: RequestInfo) {
		const users = [
			{
				id: 1,
				email: 'admin@angular.com',
				password: 'admin',
				name: 'Yury',
				bearerToken: 'j123u1u313',
				isAuthenticated: true,
				canAccessApp: true
			}, {
				id: 2,
				email: 'user@angular.com',
				password: 'user',
				name: 'Sergey',
				bearerToken: '2kj423j4p24',
				isAuthenticated: true,
				canAccessApp: true
			}, {
				id: 3,
				email: 'yury.kopyl@gmail.com',
				password: 'qFAsAET260588',
				name: 'Yury',
				bearerToken: '2kj423j4p24',
				isAuthenticated: true,
				canAccessApp: true
			}
		];

		return {users};
	}
}
