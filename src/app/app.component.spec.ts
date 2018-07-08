import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule }    from '@angular/common/http';
//components
import { AppModule } from './app.module';
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//services
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import {MatIconModule,MatDialogModule,MatAutocompleteModule,MatPaginatorModule,MatSortModule,MatButtonModule, MatCheckboxModule,MatInputModule,MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('AppModule', () => {
  let component: AppModule;
  let fixture: ComponentFixture<AppModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        
      ],
      imports: [
        HttpClientModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatDialogModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppModule,
        RouterModule,
       ],
       providers:[MessageService,MatDialogModule,
         {provide: APP_BASE_HREF, useValue: '/'}
       ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppModule);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
