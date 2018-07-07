import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { RsvpService } from './rsvp.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { TitleComponent } from './title/title.component';

import { StorageServiceModule} from 'angular-webstorage-service';
//material admin 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTooltipModule,MatSelectModule,ErrorStateMatcher,MatIconModule,MatDialogModule,MatAutocompleteModule,MatPaginatorModule,MatSortModule,MatButtonModule,MatRadioModule,MatCheckboxModule,MatInputModule,MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { RsvpComponent } from './rsvp/rsvp.component';
import { LandingComponent } from './landing/landing.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { TravelComponent } from './travel/travel.component';
import { PhotoComponent } from './photo/photo.component';
import { RegistryComponent } from './registry/registry.component';
import { TodoComponent } from './todo/todo.component';
import { FaqComponent } from './faq/faq.component';
import { CoupleComponent } from './couple/couple.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import {PaymentModule} from "./payments/payment/payment.module";


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TitleComponent,
    RsvpComponent,
    LandingComponent,
    ScheduleComponent,
    ContactComponent,
    TravelComponent,
    PhotoComponent,
    RegistryComponent,
    TodoComponent,
    FaqComponent,
    CoupleComponent
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    StorageServiceModule,
    MatSortModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    NgSelectModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MessageService,RsvpService,ErrorStateMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'app';
}
