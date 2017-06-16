import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionSheetComponent } from './question-sheet.component';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/landing-page', pathMatch: 'full' },
	{ path: 'landing-page', component: LandingPageComponent },
	{ path: 'question-sheet', component: QuestionSheetComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{}