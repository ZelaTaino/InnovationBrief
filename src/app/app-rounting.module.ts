import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { BackgroundFormComponent } from './background-form/background-form.component'
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MarketFormComponent } from './market-form/market-form.component';

const routes: Routes = [
	{ path: '', redirectTo: '/landing-page', pathMatch: 'full' },
	{ path: 'landing-page', component: LandingPageComponent },
	{ path: 'background-form', component: BackgroundFormComponent},
	{ path: 'customer-form', component: CustomerFormComponent},
	{ path: 'market-form', component: MarketFormComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{}