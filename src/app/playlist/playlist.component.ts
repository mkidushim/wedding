import { Component,Inject, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Song } from '../song';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MatTableDataSource , MatPaginator, MatSort} from '@angular/material';

// import { PLAYLIST } from '../mock-songs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaylistService } from '../playlist.service';
import { UpdateModal } from '../playlist/update.component';
import { DeleteModal } from '../playlist/delete.component';
import { MessagesComponent } from '../messages/messages.component';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers:[UpdateModal,DeleteModal,MessagesComponent]
})
export class PlaylistComponent implements OnInit {
  playlist: Song[];
  artist: string;
  name: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  // dataSource = new MatTableDataSource();
  dataSource: MatTableDataSource<Song>;
  displayedColumns = ['name', 'artist', 'update','delete'];

  private refreshTable() {
      this.dataSource.paginator = this.paginator;
  }
  add(name: string,artist: string): void {
    name = name.trim();
    artist = artist.trim();
    if (!name) { return; }
    if (!artist) { return; }
    for (var item in this.dataSource.data) {
      if(this.dataSource.data[item].name == name && this.dataSource.data[item].artist == artist){
          alert('This song has already been added to the list.');
          return;
        }
    }
    this.playlistService.addSong({ name , artist} as Song)
      .subscribe(song => {
        this.dataSource.data.unshift(song);
        this.refreshTable();
      });
  }
  
  constructor(private playlistService:PlaylistService,public dialog: MatDialog) { 
  }

  ngOnInit() {
    

    
    this.getPlaylist();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  //update function
  update(row) {
    let dialogRef = this.dialog.open(UpdateModal, {
      width: '250px',
      data: { name: row.name, artist: row.artist,id:row.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        let i = this.dataSource.data.indexOf(row);
        this.dataSource.data[i] = result.content;
        this.refreshTable();
      }
    });
    console.log('Row clicked: ', row);
  }
  //delete function
  delete(row) {
    let dialogRef = this.dialog.open(DeleteModal, {
      width: '250px',
      data: { name: row.name, artist: row.artist,id:row.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        let i = this.dataSource.data.indexOf(row);
        this.dataSource.data.splice(i, 1);
        this.refreshTable();
      }
    });
    console.log('Row clicked: ', row);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  getPlaylist(): void {
    this.dataSource = new MatTableDataSource();
    this.playlistService.getPlaylist()
        .subscribe(playlist =>{ this.dataSource.data = playlist, playlist= playlist});
  }
}