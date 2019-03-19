import {TestBed} from '@angular/core/testing';

import {CoreResolve} from './core.resolve';

describe('Example.ResolveService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: CoreResolve = TestBed.get(CoreResolve);
		expect(service).toBeTruthy();
	});
});
