import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { PaymentService } from '../payment.service';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs/Rx';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  
  handler: any;
  amount = 0;

  constructor(private paymentSvc: PaymentService ) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '/wedding-prod/assets/ny.jpg',
      locale: 'auto',
      statement_descriptor:'Custom_descriptor',
      zipCode:true,
      color:'#FFFBF0',
      token: token => {
        this.paymentSvc.processPayment(token.id,token.email,this.amount).subscribe(
          data => {
            console.log('payment made');
            return true;
          },
          error => {
            console.error("Error saving food!");
            return Observable.throw(error);
          }
        );
      }
    });
  }
  handlePayment(f: NgForm) {
    this.amount = f.form.controls.amount.value*100;
    this.handler.open({
      name: "Alex & Mike's Wedding",
      amount:this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }
}
