import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { firebaseConfig } from '../environments/firebase.config'

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthService } from "./security/auth.service";
import { AdminGuard } from "./security/auth.guard";
import { UserGuard } from "./security/auth.guard";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BackgroundFormComponent } from './background-form/background-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MarketFormComponent } from './market-form/market-form.component';
import { AngularFireAuthModule } from "angularfire2/auth";

import { InnovationBriefService } from './shared/model/innovation-brief.service';
import { GeneralService } from './shared/model/general.service';
import { QuestionService } from './shared/model/question.service';
import { WindowRefService } from './shared/model/window.service';

import { RouterConfig } from './router.config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormListComponent } from './form-list/form-list.component';
import { LaunchpadDashboardComponent } from './launchpad-dashboard/launchpad-dashboard.component';
import { LaunchpadFormsComponent } from './launchpad-forms/launchpad-forms.component';
import { CreateLaunchpadComponent } from './create-launchpad/create-launchpad.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { InnovationBriefAnswersComponent } from './innovation-brief-answers/innovation-brief-answers.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploaderListComponent } from './uploader-list/uploader-list.component';
import { QuestionComponent } from './question/question.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionTextComponent } from './question-text/question-text.component';
import { CompletedComponent } from './completed/completed.component';
import { NavBubblesComponent } from './nav-bubbles/nav-bubbles.component';
import { NavBubbleComponent } from './nav-bubble/nav-bubble.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { QuestionCoverComponent } from './question-cover/question-cover.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaunchpadTableComponent } from './launchpad-table/launchpad-table.component';
import { NavBarTransComponent } from './nav-bar-trans/nav-bar-trans.component';
import { NavBarThanksComponent } from './nav-bar-thanks/nav-bar-thanks.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent, 
    LoginComponent,
    RegisterComponent,
    LogoHeaderComponent, 
    LandingPageComponent,
    BackgroundFormComponent,
    CustomerFormComponent,
    MarketFormComponent,
    DashboardComponent,
    FormListComponent,
    LaunchpadDashboardComponent,
    LaunchpadFormsComponent,
    CreateLaunchpadComponent,
    LaunchpadComponent,
    InnovationBriefAnswersComponent,
    UploaderComponent,
    UploaderListComponent,
    QuestionComponent,
    QuestionFormComponent,
    QuestionTextComponent,
    CompletedComponent,
    NavBubblesComponent,
    NavBubbleComponent,
    ConfirmationComponent,
    QuestionCoverComponent,
    NavBarComponent,
    LaunchpadTableComponent,
    NavBarTransComponent,
    NavBarThanksComponent,
    NavFooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterConfig,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WindowRefService, InnovationBriefService, AuthService, AdminGuard, UserGuard, GeneralService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
