import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchAlbum } from './search-album.interface';
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-album-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './album-search.component.html',
  styleUrl: './album-search.component.sass'
})
export class AlbumSearchComponent {

  @Output() selectedCompEvent = new EventEmitter<string>(); 

  searchQuery: string = "";

  searchResults: SearchAlbum[] = [];

  async queryDiscogs():Promise<void> {
    try {
      console.log(this.searchQuery)
      const response = await fetch(`https://api.discogs.com/database/search?q=${this.searchQuery}&type=release`,{
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
    console.log(id);
    try {
      const response = await fetch(`https://api.discogs.com/users/cforlini/collection/folders/1/releases/${id}?oauth_consumer_key=wTPpJsCySNodlbLlmBsP&oauth_token=mvOSiWtKTcQLpvODAnhfivIyJncuYExFgAkrxDwh&oauth_signature_method=PLAINTEXT&oauth_timestamp=1712086185&oauth_nonce=I7DWlVvbmuu&oauth_version=1.0&oauth_signature=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy%26SGJOxupzMPQDgZIyTvViHWsJThUgANniOGwpOVcK`, {
        method: "POST"
      })
      const data = await response.json();
      this.selectedCompEvent.emit("album")
    } catch (error) {
      console.log(error);
    }
  }

  
}
