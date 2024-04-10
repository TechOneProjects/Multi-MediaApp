import { Component, Inject, inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { DBAlbum } from '../chases-music/album.interface';


@Component({
  selector: 'app-album-bottom-card',
  standalone: true,
  imports: [],
  templateUrl: './album-bottom-card.component.html',
  styleUrl: './album-bottom-card.component.sass'
})
export class AlbumBottomCardComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {album: DBAlbum}) {}
}
