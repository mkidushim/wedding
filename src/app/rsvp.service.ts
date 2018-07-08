import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { MessageService } from './message.service';
import { Invitee } from './invitee';
import { Rsvp } from './rsvp';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded;' })
};


@Injectable()
export class RsvpService {
  constructor(private http: HttpClient,private messageService: MessageService) { }
  private apiUrl = environment.baseURL;
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
  getGuests (invitee: Invitee): Observable<Invitee[]> {
    return this.http.post<Invitee[]>(this.apiUrl+'get_guests.php',invitee,httpOptions).pipe(
      tap(Invitee => this.log(`fetched Guest List`)),
      catchError(this.handleError('getGuests', []))
    );
  }

  checkInvite(invitee: Invitee): Observable<Invitee> {
    return this.http.post<Invitee>(this.apiUrl+'check_rsvp.php', invitee, httpOptions).pipe(
      tap((invitee: Invitee) => this.log(`Valid Invite For: ${invitee.name}`)),
      catchError(this.handleError<Invitee>('checkInvite'))
    );
  }
  submitRsvp(rsvp: Rsvp): Observable<Rsvp[]>  {
    return this.http.post<Rsvp[]>(this.apiUrl+'submit_rsvp.php', rsvp, httpOptions).pipe(
      tap((rsvp: Rsvp) => this.log(`Submitted RSVP`)),
      catchError(this.handleError<Rsvp>('submitRsvp'))
    );
  }
}
