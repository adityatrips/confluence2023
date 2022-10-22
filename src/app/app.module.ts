import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { CallForPaperComponent } from './pages/call-for-paper/call-for-paper.component';
import { PaperSubmissionComponent } from './pages/paper-submission/paper-submission.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { VenueComponent } from './pages/venue/venue.component';
import { CommitteesComponent } from './pages/committees/committees.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, SpeakersComponent, CallForPaperComponent, PaperSubmissionComponent, RegistrationComponent, VenueComponent, CommitteesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
