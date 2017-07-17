import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BackgroundFormComponent } from './background-form/background-form.component'
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MarketFormComponent } from './market-form/market-form.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LaunchpadDashboardComponent } from './launchpad-dashboard/launchpad-dashboard.component';
import { LaunchpadFormsComponent } from './launchpad-forms/launchpad-forms.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'create-launchpad', component: LoginComponent},
    { path: 'launchpad-dashboard',
        children:[
            // {path: ":id",children: [{path: 'innovation-brief', component: LandingPageComponent}, {path: '', component: LaunchpadFormsComponent}]},
            {path: 'register', component: RegisterComponent},
            {path: '', component: LaunchpadDashboardComponent}
        ]
    },
    { path: 'user-home', component: UserHomeComponent },
    { path: 'user-home', children: [{path: 'innovation-brief', component: LandingPageComponent}]},
    { path: 'register', component: RegisterComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'background-form', component: BackgroundFormComponent},
    { path: 'customer-form', component: CustomerFormComponent},
    { path: 'market-form', component: MarketFormComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RouterConfig{}
