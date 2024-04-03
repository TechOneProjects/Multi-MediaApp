import { Component, Input } from '@angular/core';
import { Album, DBAlbum } from '../chases-music/album.interface';

@Component({
  selector: 'app-album-display',
  standalone: true,
  imports: [],
  templateUrl: './album-display.component.html',
  styleUrl: './album-display.component.sass'
})
export class AlbumDisplayComponent {
  @Input() dbAlbumArr: DBAlbum[] = [];
}
