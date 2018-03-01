import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { TitleComponent } from './title/title.component';

//material admin 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,MatDialogModule,MatAutocompleteModule,MatPaginatorModule,MatSortModule,MatButtonModule, MatCheckboxModule,MatInputModule,MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {UpdateModal} from './playlist/update.component';
import {DeleteModal} from './playlist/delete.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { LandingComponent } from './landing/landing.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { TravelComponent } from './travel/travel.component';
import { PhotoComponent } from './photo/photo.component';
import { RegistryComponent } from './registry/registry.component';
import { TodoComponent } from './todo/todo.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    MessagesComponent,
    TitleComponent,
    UpdateModal,
    DeleteModal,
    RsvpComponent,
    LandingComponent,
    ScheduleComponent,
    ContactComponent,
    TravelComponent,
    PhotoComponent,
    RegistryComponent,
    TodoComponent,
    FaqComponent
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
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
    MatTableModule
  ],
  entryComponents: [UpdateModal,DeleteModal],
  providers: [PlaylistService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'app';
}
