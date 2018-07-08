import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TravelComponent } from './travel/travel.component';
import { PhotoComponent } from './photo/photo.component';
import { FaqComponent } from './faq/faq.component';
import { CoupleComponent } from './couple/couple.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'couple', component: CoupleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'rsvp', component: RsvpComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
