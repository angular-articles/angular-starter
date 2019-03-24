import {AbstractControl} from '@angular/forms';
import {map} from 'rxjs/operators';

import {SignupService} from '../services/signup.service';
import {User} from '../models/user';

export class EmailExists {
	static createValidator(signupService: SignupService) {
		return (control: AbstractControl) => {
			return signupService.checkEmail(control.value).pipe(
				map((users$: User[]) => {
					const users = users$.filter(user => user.email === control.value);

					return !users.length ? null : {emailExists: true};
				})
			);
		};
	}
}
