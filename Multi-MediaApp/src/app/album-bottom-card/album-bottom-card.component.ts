import { Component, Inject, OnInit, inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { DBAlbum } from '../chases-music/album.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-album-bottom-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './album-bottom-card.component.html',
  styleUrl: './album-bottom-card.component.sass'
})
export class AlbumBottomCardComponent implements OnInit{
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {album: DBAlbum, bottomSheet: any}) {}

  bottomSheetRef = inject(MatBottomSheetRef);

  isLoggedIn: boolean = false;

  async deleteAlbum(id:number):Promise<void> {
    this.bottomSheetRef.dismiss();
    const response = await fetch(`http://localhost:3000/albums/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await response.json();
    if(data.status == 200) {
    } else {
      alert(data.message)
    }
  } 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
}
