import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Song } from './song';


import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded;' })
};


@Injectable()
export class PlaylistService {
  private apiUrl = 'http://localhost:8888/wedding_services/';
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getPlaylist (): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiUrl+'get_songs.php')
      .pipe(
        tap(Song => this.log(`fetched Playlist`)),
        catchError(this.handleError('getPlaylist', []))
      );
  }

  addSong (song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrl+'add_song.php', song, httpOptions).pipe(
      tap((song: Song) => this.log(`added song w/ name=${song.name}`)),
      catchError(this.handleError<Song>('addSong'))
    );
  }
  updateSong(song: Song): Observable<Song>  {
    return this.http.post<Song>(this.apiUrl+'update_song.php', song, httpOptions).pipe(
      tap((song: Song) => this.log(`updated song w/ name=${song.id}`)),
      catchError(this.handleError<Song>('updateSong'))
    );
  }
  deleteSong(song: Song): Observable<Song>  {
    return this.http.post<Song>(this.apiUrl+'delete_song.php', song, httpOptions).pipe(
      tap((song: Song) => this.log(`updated song w/ name=${song.id}`)),
      catchError(this.handleError<Song>('deleteSong'))
    );
  }
  constructor(private http: HttpClient,private messageService: MessageService) { }

}
