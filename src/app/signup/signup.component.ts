import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SignupService} from '../shared/services/signup.service';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';
import {EmailExists} from '../shared/validators/email-exists';
import {SamePassword} from '../shared/validators/same-password';

@Component({
	selector: 'app-auth',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private signupService: SignupService,
		private userService: UserService,
		private router: Router) {
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
			email: this.formBuilder.control(null, [
				Validators.required,
				Validators.email
			], EmailExists.createValidator(this.signupService)),
			passwords: this.formBuilder.group({
				password: this.formBuilder.control(null, [Validators.required, Validators.minLength(8)]),
				confirm_password: this.formBuilder.control(null, [
					Validators.required,
					Validators.minLength(8)
				])
			}, {
				validators: SamePassword.createValidator()
			})
		});
	}

	onSubmit() {
		this.signupService.signup(this.form.value).subscribe((user: User) => {
			if (user.canAccessApp && user.isAuthenticated) {
				this.userService.setUser(user);
				this.router.navigateByUrl('/');
			}
		});
	}
}
