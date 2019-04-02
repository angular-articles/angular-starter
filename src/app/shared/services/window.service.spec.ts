import {TestBed} from '@angular/core/testing';

import {WINDOW_PROVIDERS} from './window.service';

describe('WindowService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: any = TestBed.get(WINDOW_PROVIDERS);
		expect(service).toBeTruthy();
	});
});
