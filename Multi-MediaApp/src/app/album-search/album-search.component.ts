import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchAlbum } from './search-album.interface';
import { DBAlbum } from '../chases-music/album.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-album-search',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './album-search.component.html',
  styleUrl: './album-search.component.sass'
})
export class AlbumSearchComponent {
  @Output() selectedCompEvent = new EventEmitter<string>(); 
  @Output() addAlbumEvent = new EventEmitter<DBAlbum>();

  searchQuery: string = "";

  searchResults: SearchAlbum[] = [];

  async queryDiscogs():Promise<void> {
    try {
      console.log(this.searchQuery)
      const response = await fetch(`https://api.discogs.com/database/search?q=${this.searchQuery}&type=release&page=1&per_page=5`,{
        headers: {
          "Authorization": "Discogs key=wTPpJsCySNodlbLlmBsP, secret=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy"
        }});
        const data = await response.json();
        this.searchResults = data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async addAlbumToCollection(id: number): Promise<void> {
    let selectedAlbum: SearchAlbum = this.searchResults.filter(album => album.id == id)[0];

    let albumToAdd: DBAlbum = {
      artist: selectedAlbum.title.slice(0, selectedAlbum.title.indexOf("-") - 1),
      cover_image: selectedAlbum.cover_image,
      title: selectedAlbum.title.slice(selectedAlbum.title.indexOf("-") + 2, selectedAlbum.title.length),
      year: parseInt(selectedAlbum.year),
      genres: selectedAlbum.genre,
      id: selectedAlbum.id
    }
    this.selectedCompEvent.emit("album")

    this.addAlbumEvent.emit(albumToAdd);
  }

  
}
