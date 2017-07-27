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
import { AdminGuard } from "./security/auth.guard";
import { InnovationBriefAnswersComponent } from './innovation-brief-answers/innovation-brief-answers.component'
import { QuestionFormComponent } from './question-form/question-form.component';
import { CompletedComponent } from './completed/completed.component';

// const routes: Routes = [
//     { path: '', redirectTo: '/login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'create-launchpad', component: LoginComponent},
//     { path: 'launchpad-dashboard',
//       children:[
//         {path: "launchpad/:id",
//             children: [
//               {path: 'innovation-brief-answers/:id', component: InnovationBriefAnswersComponent},
//               {path: '', component: LaunchpadFormsComponent}
//             ]},
//         {path: 'register', component: RegisterComponent},
//         {path: '', component: LaunchpadDashboardComponent}
//       ],
//       // THIS WILL PREVENT A USER TO ROUTE HERE IF THEY ARE NOT ADMIN
//       canActivate: [AdminGuard]
//     },
//     { path: 'launchpad/:id',
//       children: [
//         {path: "innovation-brief",
//           children: [
//             {path: 'background-form',
//               children: [
//                 {path: 'customer-form',
//                   children: [
//                     {path: 'market-form', component: MarketFormComponent},
//                     {path: '', component: CustomerFormComponent},
//                   ]},
//             {path: '', component: BackgroundFormComponent}
//           ]},
//         {path: '', component: LandingPageComponent}
//       ]},
//     {path: '', component: LaunchpadFormsComponent}
//   ]}
//   // {path: '**', redirectTo: 'login'}
// ];
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'innovation-brief',children: [
    {path: 'overview', component: InnovationBriefAnswersComponent},
    {path: 'completed', component: CompletedComponent},
    {path: ':id', component: QuestionFormComponent},
    {path: '', component: LandingPageComponent}
  ]},
  { path: 'create-launchpad', component: LoginComponent},
  { path: 'launchpad-dashboard',
    children:[
      {path: "launchpad/:id",
          children: [
            {path: 'innovation-brief-answers/:id', component: InnovationBriefAnswersComponent},
            {path: '', component: LaunchpadFormsComponent}
          ]},
      {path: 'register', component: RegisterComponent},
      {path: '', component: LaunchpadDashboardComponent}
    ],
    // THIS WILL PREVENT A USER TO ROUTE HERE IF THEY ARE NOT ADMIN
    canActivate: [AdminGuard]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RouterConfig{}
