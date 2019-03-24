import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from '../shared/services/login.service';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';

@Component({
	selector: 'app-auth',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private userService: UserService,
		private router: Router) {
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			email: this.formBuilder.control(null, [
				Validators.required,
				Validators.email
			]),
			password: this.formBuilder.control(null, [Validators.required, Validators.minLength(8)])
		});
	}

	onSubmit() {
		this.loginService.login(this.form.value).subscribe((user: User) => {
			if (user.canAccessApp && user.isAuthenticated) {
				this.userService.setUser(user);
				this.router.navigateByUrl('/');
			}
		});
	}
}
