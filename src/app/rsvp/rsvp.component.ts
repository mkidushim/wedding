import { Component, Inject, Injectable, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Invitee } from '../invitee';
import { Rsvp } from '../rsvp';
import {FormControl} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { RsvpService } from '../rsvp.service';
import { MessagesComponent } from '../messages/messages.component';
import {LOCAL_STORAGE, SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

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
  local: any = {id:null,name:null,email:null,song:null,coming:'1',message:null,token:null};
  storeObject:any =['id','email','name','token','plus_one'];
  guest_list:any  = [];
  // token: string = undefined;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private rsvpService:RsvpService,private router: Router) { }

  ngOnInit() {
    console.log(this.getFromLocal());
  }

  getGuestList(): any {
    this.rsvpService.getGuests({ name:this.local.name} as Invitee)
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
    this.local['submitted'] = this.storage.get('submitted');
    return this.local;
    
  }

  saveInLocal(type,val): void {
    console.log( val);
    this.storage.set(type, val);
    // this.token= this.storage.get(type);
    // console.log(this.token);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.rsvpService.checkInvite({ name } as Invitee)
      .subscribe(invitee => {
         console.log(invitee);
         if(invitee.status == 'NO'){
           alert(invitee.content);
           return;
         }
         this.saveInLocal('id',invitee.id);
         this.saveInLocal('token',invitee.token);
         this.saveInLocal('name',invitee.name);
         this.saveInLocal('plus_one',invitee.plus_one);
         this.getFromLocal();
      });
  }
  removeForm(index:string):void{
    console.log(index);
    this.forms.splice(index, 1);
  }
  submit(): void {
    var token: string = this.storage.get('token');
    console.log(this.local);
    console.log(this.forms);
    var output:any = [];
    var local_output:any = [];
    local_output = Object.assign({}, this.local);
    delete local_output.token;
    output.push(local_output);
    for(var i in this.forms){
      for(var n in this.forms[i]){
        if(this.forms[i][n] != null){
          this.forms[i][n] = this.forms[i][n].trim();  
        }
      }
      console.log(this.forms[i]['id']);
      if(output[0]['plus_one'] == '0'){
        if(this.forms[i]['id'] == '' || this.forms[i]['id'] == null){
          alert("Please make sure all rsvp's include a name");
          return;
        }
      }else{
        if(this.forms[i]['name'] == '' || this.forms[i]['name'] == null){
          alert("Please make sure all rsvp's include a name");
          return;
        }
      }
      output.push(this.forms[i]);  
    }
    console.log(output);
    output = JSON.stringify(output);
    this.rsvpService.submitRsvp({ rsvp : output} as Rsvp)
    .subscribe(invitee => {
       console.log(invitee);
       this.saveInLocal('submitted','1');
       this.local['submitted'] = '1';
    });
  }
  addForm():void{
    console.log();
    if(this.local.plus_one == '1' && this.forms.length > 0){
      return;
    }
    this.forms.push({name:null,email:null,song:null,message:null,coming:'1'});
    this.getGuestList();
    console.log(this.forms);
  }
}
