import {FormGroup} from '@angular/forms';

export class SamePassword {
	static createValidator() {
		return (group: FormGroup) => {
			const errors = group.get('confirm_password').errors;

			if (group.get('password').value !== group.get('confirm_password').value && !group.get('confirm_password').hasError('samePassword')) {
				group.get('confirm_password').setErrors({samePassword: true});
			} else if (group.get('password').value === group.get('confirm_password').value &&
				group.get('confirm_password').hasError('samePassword')) {

				delete errors.samePassword;

				group.get('confirm_password').setErrors(Object.keys(errors).length ? errors : null);
			}

			return group.get('password').value === group.get('confirm_password').value ? null : {samePassword: true};
		};
	}
}
