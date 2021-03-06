import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoreComponent} from './core.component';
import {CoreResolve} from './core.resolve';

const routes: Routes = [
	{
		path: '', component: CoreComponent, resolve: {user: CoreResolve}, children: [
			{path: 'user', loadChildren: '../user/user.module#UserModule'}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [CoreResolve]
})

export class CoreRoutingModule {
}
