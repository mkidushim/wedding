import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MakePaymentComponent } from '../make-payment/make-payment.component';
import { PaymentService } from '../payment.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    MakePaymentComponent,

  ],
  exports:[
    MakePaymentComponent,
    FormsModule
  ],
  providers: [
    PaymentService,
  ]
})
export class PaymentModule { }