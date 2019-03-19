import {TestBed} from '@angular/core/testing';

import {InMemoryUsersService} from './in-memory-users.service';

describe('InMemoryUsersService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: InMemoryUsersService = TestBed.get(InMemoryUsersService);
		expect(service).toBeTruthy();
	});
});
