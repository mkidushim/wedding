import { Component, OnInit, ViewChild } from '@angular/core';
import { RsvpService } from '../rsvp.service';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { List } from '../invitee';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rsvp', 'coming','message','song'];
  dataSource: MatTableDataSource<List>;
  guest_list:any  = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private rsvpService:RsvpService,private router: Router) { 
  }

  ngOnInit() {
    this.getGuestList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getGuestList(): any {
    this.rsvpService.getList()
    .subscribe(list => {
      console.log(list);
      this.dataSource = new MatTableDataSource(list);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });   
  }
}
