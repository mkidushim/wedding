import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TodoComponent } from './todo/todo.component';
import { TravelComponent } from './travel/travel.component';
import { PhotoComponent } from './photo/photo.component';
import { FaqComponent } from './faq/faq.component';
import { CoupleComponent } from './couple/couple.component';
import { RsvpConfirmComponent } from './rsvp/rsvp.confirm.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'home', component: LandingComponent },
  { path: 'couple', component: CoupleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'rsvp2/:token/:email/:name', component: RsvpConfirmComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
