import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Invitee } from './invitee';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded;' })
};


@Injectable()
export class RsvpService {
  constructor(private http: HttpClient,private messageService: MessageService) { }
  private apiUrl = 'https://localhost/wedding_services/';
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // getPlaylist (): Observable<Song[]> {
  //   return this.http.get<Invitee[]>(this.apiUrl+'get_songs.php')
  //     .pipe(
  //       tap(Song => this.log(`fetched Playlist`)),
  //       catchError(this.handleError('getPlaylist', []))
  //     );
  // }

  checkInvite(invitee: Invitee): Observable<Invitee> {
    return this.http.post<Invitee>(this.apiUrl+'check_rsvp.php', invitee, httpOptions).pipe(
      tap((invitee: Invitee) => this.log(`Valid Invite For: ${invitee.name}`)),
      catchError(this.handleError<Invitee>('checkInvite'))
    );
  }
  // updateSong(song: Song): Observable<Song>  {
  //   return this.http.post<Song>(this.apiUrl+'update_song.php', song, httpOptions).pipe(
  //     tap((song: Song) => this.log(`updated song w/ name=${song.id}`)),
  //     catchError(this.handleError<Song>('updateSong'))
  //   );
  // }
  // deleteSong(song: Song): Observable<Song>  {
  //   return this.http.post<Song>(this.apiUrl+'delete_song.php', song, httpOptions).pipe(
  //     tap((song: Song) => this.log(`updated song w/ name=${song.id}`)),
  //     catchError(this.handleError<Song>('deleteSong'))
  //   );
  // }

}
