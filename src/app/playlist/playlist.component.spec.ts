import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule }    from '@angular/common/http';
import { MessageService } from '../message.service';
import { PlaylistComponent } from './playlist.component';
import { PlaylistService} from '../playlist.service';
import { Song } from '../song';
import { FormsModule } from '@angular/forms';
import {MatIconModule,MatDialogModule,MatAutocompleteModule,MatPaginatorModule,MatSortModule,MatButtonModule, MatCheckboxModule,MatInputModule,MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistComponent],
      providers:[PlaylistService,MessageService,MatDialogModule],
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
        BrowserAnimationsModule
       ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
