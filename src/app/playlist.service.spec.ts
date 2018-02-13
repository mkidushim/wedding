import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule }    from '@angular/common/http';
import { PlaylistService } from './playlist.service';
import { MessageService } from './message.service';
describe('PlaylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistService,MessageService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PlaylistService], (service: PlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
