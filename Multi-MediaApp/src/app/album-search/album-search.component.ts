import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchAlbum } from './search-album.interface';
import { v4 as uuidv4 } from "uuid";
import { DBAlbum } from '../chases-music/album.interface';

@Component({
  selector: 'app-album-search',
  standalone: true,
  imports: [FormsModule],
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
    // console.log(id);
    // try {
    //   const response = await fetch(`https://api.discogs.com/users/cforlini/collection/folders/1/releases/${id}?oauth_consumer_key=wTPpJsCySNodlbLlmBsP&oauth_token=mvOSiWtKTcQLpvODAnhfivIyJncuYExFgAkrxDwh&oauth_signature_method=PLAINTEXT&oauth_timestamp=${new Date().getTime()}&oauth_nonce=I7DWlVvbmuu&oauth_version=1.0&oauth_signature=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy%26SGJOxupzMPQDgZIyTvViHWsJThUgANniOGwpOVcK`, {
    //     method: "POST"
    //   })
    //   const data = await response.json();
    //   this.selectedCompEvent.emit("album")
    // } catch (error) {
    //   console.log(error);
    // }
    let selectedAlbum: SearchAlbum = this.searchResults.filter(album => album.id == id)[0];
    // console.log(selectedAlbum)
    let albumToAdd: DBAlbum = {
      artist: selectedAlbum.title.slice(0, selectedAlbum.title.indexOf("-") - 1),
      cover_image: selectedAlbum.cover_image,
      title: selectedAlbum.title.slice(selectedAlbum.title.indexOf("-") + 2, selectedAlbum.title.length),
      year: parseInt(selectedAlbum.year),
      genres: selectedAlbum.genre,
      id: selectedAlbum.id
    }
    // console.log(albumToAdd)

    this.addAlbumEvent.emit(albumToAdd);
  }

  
}
