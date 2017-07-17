import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { firebaseConfig } from '../environments/firebase.config'

import { AppComponent } from './app.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BackgroundFormComponent } from './background-form/background-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MarketFormComponent } from './market-form/market-form.component';

import { InnovationBriefService } from './shared/model/innovation-brief.service';

import { AppRoutingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent, 
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [InnovationBriefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
