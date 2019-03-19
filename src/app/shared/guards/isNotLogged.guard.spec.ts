import {TestBed, async, inject} from '@angular/core/testing';

import {IsNotLoggedGuard} from './isNotLogged.guard';

describe('AuthGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [IsNotLoggedGuard]
		});
	});

	it('should ...', inject([IsNotLoggedGuard], (guard: IsNotLoggedGuard) => {
		expect(guard).toBeTruthy();
	}));
});
