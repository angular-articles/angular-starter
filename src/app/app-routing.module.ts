import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IsLoggedGuard} from './shared/guards/isLogged.guard';
import {IsNotLoggedGuard} from './shared/guards/isNotLogged.guard';
import {NotFountComponent} from './not-fount/not-fount.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'login', loadChildren: './login/login.module#LoginModule', canLoad: [IsNotLoggedGuard], data: {animations: 'HomePage'}},
    {path: 'signup', loadChildren: './signup/signup.module#SignupModule', canLoad: [IsNotLoggedGuard], data: {animations: 'AboutPage'}},
    {path: 'home', loadChildren: './core/core.module#CoreModule', canLoad: [IsLoggedGuard]},
    {path: '404', component: NotFountComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
