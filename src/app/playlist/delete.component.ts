import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Song } from '../song';
import { PlaylistService } from '../playlist.service';
import { PlaylistComponent } from './playlist.component';
@Component({
  selector: 'delete-modal',
  templateUrl: 'delete-modal.html',
})
export class DeleteModal {

  constructor(
    public dialogRef: MatDialogRef<DeleteModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,private playlistService:PlaylistService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    let name = this.data.name.trim();
    let artist = this.data.artist.trim();
    let id = this.data.id;
    this.playlistService.deleteSong({name,artist,id} as Song)
      .subscribe(song => {

        this.dialogRef.close(song);
      });
    
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */