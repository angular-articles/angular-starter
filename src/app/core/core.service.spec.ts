import {TestBed} from '@angular/core/testing';

import {CoreService} from './core.service';

describe('ExampleService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: CoreService = TestBed.get(CoreService);
		expect(service).toBeTruthy();
	});
});
