import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchAlbum } from './search-album.interface';
import { DBAlbum } from '../chases-music/album.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-album-search',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatProgressBarModule],
  templateUrl: './album-search.component.html',
  styleUrl: './album-search.component.sass'
})
export class AlbumSearchComponent {
  @Output() selectedCompEvent = new EventEmitter<string>(); 
  @Output() addAlbumEvent = new EventEmitter<DBAlbum>();

  searchQuery: string = "";
  pageNumber: number = 1;

  isLoading:boolean = false;

  searchResults: SearchAlbum[] = [];

  searchClicked(): void {
    this.pageNumber = 1;
    this.queryDiscogs();
  }

  async queryDiscogs():Promise<void> {
    try {
      this.isLoading = true;
      const response = await fetch(`https://api.discogs.com/database/search?q=${this.searchQuery}&type=master&page=${this.pageNumber}&per_page=8`,{
        headers: {
          "Authorization": "Discogs key=wTPpJsCySNodlbLlmBsP, secret=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy"
        }});
        const data = await response.json();
        this.searchResults = data.results;
        this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  }

  async addAlbumToCollection(id: number): Promise<void> {
    let selectedAlbum: SearchAlbum = this.searchResults.filter(album => album.id == id)[0];
    let artistName = selectedAlbum.title.slice(0, selectedAlbum.title.indexOf("-") - 1)
    let albumTitle = selectedAlbum.title.slice(selectedAlbum.title.indexOf("-") + 2, selectedAlbum.title.length)
    if(artistName.indexOf("(") > 0) {
      artistName = artistName.slice(0, artistName.indexOf("(") - 1)
    }

    let albumToAdd: DBAlbum = {
      artist: artistName,
      cover_image: selectedAlbum.cover_image,
      title: albumTitle,
      year: parseInt(selectedAlbum.year),
      genres: selectedAlbum.genre,
      id: selectedAlbum.id
    }
    this.selectedCompEvent.emit("album")

    this.addAlbumEvent.emit(albumToAdd);
  }

  nextPage(){
    this.pageNumber++
    this.queryDiscogs();
  }

  prevPage() {
    this.pageNumber--
    this.queryDiscogs();
  }
  
}
