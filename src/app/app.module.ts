import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { RsvpService } from './rsvp.service';
import { AppRoutingModule } from './app-routing.module';

import { StorageServiceModule} from 'angular-webstorage-service';
//material admin 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule,ErrorStateMatcher,MatIconModule,MatButtonModule,MatRadioModule,MatInputModule,MatListModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';


import { RsvpComponent } from './rsvp/rsvp.component';
import { LandingComponent } from './landing/landing.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { TravelComponent } from './travel/travel.component';
import { PhotoComponent } from './photo/photo.component';
import { RegistryComponent } from './registry/registry.component';
import { FaqComponent } from './faq/faq.component';
import { CoupleComponent } from './couple/couple.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    LandingComponent,
    ScheduleComponent,
    ContactComponent,
    TravelComponent,
    PhotoComponent,
    RegistryComponent,
    FaqComponent,
    CoupleComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatTooltipModule,
    NgSelectModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [RsvpService,ErrorStateMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
