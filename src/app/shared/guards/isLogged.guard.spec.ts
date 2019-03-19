import {TestBed, async, inject} from '@angular/core/testing';

import {IsLoggedGuard} from './isLogged.guard';

describe('AuthGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [IsLoggedGuard]
		});
	});

	it('should ...', inject([IsLoggedGuard], (guard: IsLoggedGuard) => {
		expect(guard).toBeTruthy();
	}));
});
