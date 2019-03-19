import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreComponent} from './core.component';

describe('ExampleComponent', () => {
	let component: CoreComponent;
	let fixture: ComponentFixture<CoreComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoreComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoreComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
