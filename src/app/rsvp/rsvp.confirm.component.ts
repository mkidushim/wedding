import { Component, Inject, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Invitee } from '../invitee';
import {FormControl} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { RsvpService } from '../rsvp.service';
import { MessagesComponent } from '../messages/messages.component';
@Component({
  selector: 'app-rsvp-confirm',
  templateUrl: './rsvp.confirm.component.html',
  styleUrls: ['./rsvp.component.css'],
  providers: [MessagesComponent]
})
export class RsvpConfirmComponent implements OnInit {
  rsvp: Invitee[];
  email: string;
  name: string;
  token: string;

  constructor(private rsvpService:RsvpService,private router: Router,private route: ActivatedRoute) {
    console.log(this.route.paramMap);
    // this.route.paramMap.subscribe((paramMap) => {
    //   paramMap = paramMap.params;
    //   this.token = paramMap.token;
    //   this.email = paramMap.email;
    //   this.name = paramMap.name;
    // });
  }

  ngOnInit() {
  }
  // submit rsvp
  // get guest list
  // 
}
