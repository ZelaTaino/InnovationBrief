import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { firebaseConfig } from '../environments/firebase.config'

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionSheetComponent } from './question-sheet.component';
import { LogoHeaderComponent } from './logo-header.component';
import { LandingPageComponent } from './landing-page.component';

import { AppRoutingModule } from './app-rounting.module';

export const firebaseConfig = {
  apiKey: "AIzaSyCeISEPhi1rYM-Kt9_PGFdYMX5zuXuprQM",
  authDomain: "innovation-brief.firebaseapp.com",
  databaseURL: "https://innovation-brief.firebaseio.com",
  projectId: "innovation-brief",
  storageBucket: "innovation-brief.appspot.com",
  messagingSenderId: "278354229582"
}

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent, 
    QuestionSheetComponent, 
    LogoHeaderComponent, 
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
