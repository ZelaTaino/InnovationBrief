import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionSheetComponent } from './question-sheet.component';
import { LogoHeaderComponent } from './logo-header.component';
import { LandingPageComponent } from './landing-page.component';

import { AppRoutingModule } from './app-rounting.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
