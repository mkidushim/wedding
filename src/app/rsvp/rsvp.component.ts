import { Component, Inject, Injectable, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Invitee } from '../invitee';
import {FormControl} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { RsvpService } from '../rsvp.service';
import { MessagesComponent } from '../messages/messages.component';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
  providers: [MessagesComponent]
})
@Injectable()
export class RsvpComponent implements OnInit {
  rsvp: Invitee[];
  email: string;
  name: string;
  store:any;
  forms:any =[];
  local: any = {name:null,email:null,song:null,coming:'1',message:null,token:null};
  storeObject:any =['email','name','token','plus_one'];
  guest_list:any  = [];
  // token: string = undefined;
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private rsvpService:RsvpService,private router: Router) { }

  ngOnInit() {
    console.log(this.getFromLocal());
    this.getGuestList();
  }

  getGuestList(): any {
    this.rsvpService.getGuests()
    .subscribe(invitee => {
       this.guest_list = invitee;
    });   
  }
  getFromLocal(): any {
    this.store =this.storage;
    for(var i in this.storeObject){
      var key = this.storeObject[i];
      this.local[key] = this.storage.get(key);
    }
    return this.local;
    
  }

  saveInLocal(type,val): void {
    console.log( val);
    this.storage.set(type, val);
    // this.token= this.storage.get(type);
    // console.log(this.token);
  }

  add(name: string,email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    if (!email) { return; }
    this.rsvpService.checkInvite({ name , email} as Invitee)
      .subscribe(invitee => {
         console.log(invitee);
         this.saveInLocal('token',invitee.token);
         this.saveInLocal('name',invitee.name);
         this.saveInLocal('email',invitee.email);
         this.saveInLocal('plus_one',invitee.plus_one);
         this.getFromLocal();
         // this.router.navigateByUrl('/rsvp2/'+invitee.token+'/'+invitee.email+'/'+invitee.name);
      });
  }
  submit(): void {
    var token: string = this.storage.get('token');
    console.log(this.local);
    console.log(this.forms);
    var output:any = [];
    var local_output:any = [];
    for(var i in this.forms){
      output.push(this.forms[i]);  
    }
    local_output = Object.assign({}, this.local);
    delete local_output.token;
    output.push(local_output);
    console.log(output);
  }
  addForm():void{
    console.log();
    if(this.local.plus_one == '1' && this.forms.length > 0){
      return;
    }
    this.forms.push({name:null,email:null,song:null,message:null,coming:'1'});
    console.log(this.forms);
  }
}
