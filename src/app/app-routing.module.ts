import { ContactComponent } from './pages/contact/contact.component';
import { SponsorshipComponent } from './pages/sponsorship/sponsorship.component';
import { CommitteesComponent } from './pages/committees/committees.component';
import { VenueComponent } from './pages/venue/venue.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PaperSubmissionComponent } from './pages/paper-submission/paper-submission.component';
import { CallForPaperComponent } from './pages/call-for-paper/call-for-paper.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'call-for-paper', component: CallForPaperComponent },
  { path: 'paper-submission', component: PaperSubmissionComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'committees', component: CommitteesComponent },
  { path: 'sponsorship', component: SponsorshipComponent },
  { path: 'contact-us', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
