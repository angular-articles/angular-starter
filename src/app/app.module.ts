import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

// in-memory web API
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUsersService} from './shared/services/in-memory/in-memory-users.service';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NotFountComponent} from './not-fount/not-fount.component';
import {WINDOW_PROVIDERS} from './shared/services/window.service';

@NgModule({
	declarations: [
		AppComponent,
		NotFountComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		environment.production ?
			[] : HttpClientInMemoryWebApiModule.forFeature(InMemoryUsersService, {delay: 2000})
	],
	providers: [
		WINDOW_PROVIDERS
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {
}
