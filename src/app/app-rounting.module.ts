import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionSheetComponent } from './question-sheet/question-sheet.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BackgroundFormComponent } from './background-form/background-form.component'
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MarketFormComponent } from './market-form/market-form.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'admin-home', component: AdminHomeComponent },
        { path: 'user-home', component: UserHomeComponent },
        { path: 'register', component: RegisterComponent },
	{ path: 'landing-page', component: LandingPageComponent },
	{ path: 'question-sheet', component: QuestionSheetComponent },
	{ path: 'background-form', component: BackgroundFormComponent},
	{ path: 'customer-form', component: CustomerFormComponent},
	{ path: 'market-form', component: MarketFormComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{}
