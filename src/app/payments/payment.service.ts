import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Payment} from '../payment';
import { MessageService } from '../message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded;' })
};

@Injectable()
export class PaymentService {

  userId: string;

  constructor(private http: HttpClient,private messageService: MessageService) {

  }
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
  // // addSong (charge: Charge): Observable<Song> {
  // //   return this.http.post<Payment>(this.apiUrl+'add_song.php', charge, httpOptions).pipe(
  // //     tap((song: Song) => this.log(`added song w/ name=${song.name}`)),
  // //     catchError(this.handleError<Song>('addSong'))
  // //   );
  // // }
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  //  // processPayment(token: any, amount: number) {
  processPayment(token,email,amount){
    var payment = JSON.stringify({'token':token,'email':email,'amount':amount});
    return this.http.post('https://localhost/wedding_services/make_payment.php', payment, httpOptions);
    // return this.http.post<Payment>('https://localhost/wedding_services/make_payment.php', payment, httpOptions).pipe(
    //   tap((payment:Payment) => this.log(`payment made`)),
    //   catchError(this.handleError<Payment>('proccessPayment'))
    // );
  }
  // processPayment(token) {
  //   return this.http.post('localhost:8888/wedding_services/make_payment.php',token , httpOptions);
  // }

}