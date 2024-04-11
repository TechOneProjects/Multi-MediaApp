import { Component, Inject, inject } from '@angular/core';
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
export class AlbumBottomCardComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {album: DBAlbum, bottomSheet: any}) {}

  bottomSheetRef = inject(MatBottomSheetRef);



  async deleteAlbum(id:number):Promise<void> {
    this.bottomSheetRef.dismiss();
    const response = await fetch(`http://localhost:3000/albums/${id}`, {
      method: "DELETE"
    }) 
    
  } 
}
