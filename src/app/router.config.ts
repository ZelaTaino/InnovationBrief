import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LaunchpadDashboardComponent } from './launchpad-dashboard/launchpad-dashboard.component';
import { LaunchpadFormsComponent } from './launchpad-forms/launchpad-forms.component';
import { AdminGuard } from "./security/auth.guard";
import { UserGuard } from "./security/auth.guard";
import { QuestionFormComponent } from './question-form/question-form.component';
import { CompletedComponent } from './completed/completed.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { QuestionCoverComponent } from './question-cover/question-cover.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'innovation-brief',children: [
    {path: 'confirmation', component: ConfirmationComponent},
    {path: 'completed', component: CompletedComponent},
    {path: 'cover', component: QuestionCoverComponent},
    {path: ':id', component: QuestionFormComponent},
    {path: '', component: LandingPageComponent}
    ],
    canActivate: [UserGuard]
  },
  {path: 'register', component: RegisterComponent, canActivate: [AdminGuard]},
  {path: 'launchpad-dashboard', children: [
    {path:'innovation-brief/:lp-id/:id', component: QuestionFormComponent},
    {path: '', component: LaunchpadDashboardComponent}
  ],
  canActivate: [AdminGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RouterConfig{}
