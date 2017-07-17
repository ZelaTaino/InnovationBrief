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
import { AuthGuard } from "./security/auth.guard";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BackgroundFormComponent } from './background-form/background-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MarketFormComponent } from './market-form/market-form.component';
import { AngularFireAuthModule } from "angularfire2/auth";

import { InnovationBriefService } from './shared/model/innovation-brief.service';

import { AppRoutingModule } from './app-rounting.module';

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
    MarketFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InnovationBriefService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
