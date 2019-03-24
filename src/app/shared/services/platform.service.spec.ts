import {TestBed} from '@angular/core/testing';

import {PlatformService} from './platform.service';

describe('DetectMobileService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PlatformService = TestBed.get(PlatformService);
		expect(service).toBeTruthy();
	});
});
