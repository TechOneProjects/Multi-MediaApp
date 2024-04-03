import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Album, DBAlbum } from './album.interface';
import { AlbumDisplayComponent } from '../album-display/album-display.component';
import { AlbumSearchComponent } from '../album-search/album-search.component';
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-chases-music',
  standalone: true,
  imports: [ReactiveFormsModule, AlbumDisplayComponent,  AlbumSearchComponent],
  templateUrl: './chases-music.component.html',
  styleUrl: './chases-music.component.sass'
})
export class ChasesMusicComponent implements OnInit{
  formBuilder = inject(FormBuilder);

  elemetnsArr: string[] = [];
  albumArr: Album[] = [];
  dbAlbumArr : DBAlbum[] = [];

  selectedComp: string = "album";

  trackListForm : FormGroup = this.formBuilder.group({
  })

  switchComp(comp : string) {
    // this.fetchDiscogs();
    this.selectedComp = comp;
  }

  addElement() {
    this.elemetnsArr.push(`track${this.elemetnsArr.length + 1}`);
    this.trackListForm.addControl(`track${this.elemetnsArr.length}`, new FormControl("", Validators.required));
    console.log(this.trackListForm.value)
  }

  addAlbum(album: DBAlbum) {
    this.dbAlbumArr.push(album);
    this.switchComp("album");
  }

  async fetchDiscogs():Promise<void> {
    try {
      const response = await fetch("https://api.discogs.com/users/cforlini/collection/folders/0/releases", {
        headers: {
          "Authorization": "Discogs key=wTPpJsCySNodlbLlmBsP, secret=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy"
        }});
        const data = await response.json();
        this.albumArr = data.releases;
        this.transformData();
        // console.log(this.albumArr)
    } catch (e) {
      console.log(e);
    }
  }
  async checkLogin() : Promise<void> {
    const response = await fetch("https://api.discogs.com/oauth/identity", {
      headers: {
        "Authorization" : `OAuth oauth_consumer_key="wTPpJsCySNodlbLlmBsP",oauth_token="mvOSiWtKTcQLpvODAnhfivIyJncuYExFgAkrxDwh",oauth_signature_method="PLAINTEXT",oauth_timestamp="${new Date().getTime()}",oauth_nonce="${uuidv4()}",oauth_version="1.0",oauth_signature="RwsRavuQuLPLnIruuDDptdhAKmHIHcYy%26SGJOxupzMPQDgZIyTvViHWsJThUgANniOGwpOVcK"`,
        "Cookie" : "__cf_bm=ZRBJhla1.0V8zQKzEXR5RrnbmF6PH_mKFT3CsNNdBDQ-1712082306-1.0.1.1-VddeI_5khmbe24ebOy2ZIHXihH7CFausk7qzUcN.66Ic.qvCT7rhUOjpXQEFj_1Xlj56RG7XaFXpQ6_5bJn44Q"
      }
    })
    const data = await response.json();
    console.log(data);
  }

  ngOnInit(): void {
    // this.fetchDiscogs();
    // this.checkLogin();
  }

  transformData(): void {
    for(let album of this.albumArr) {
      let artistName: string = album.basic_information.artists[0].name
      if(artistName.includes("(")) {
        artistName = artistName.slice(0, artistName.indexOf("(") - 1)
        console.log(artistName)
      }

      const newAlbum: DBAlbum = {
        id: album.basic_information.id,
        artist: artistName,
        cover_image: album.basic_information.cover_image,
        title:album.basic_information.title,
        year: album.basic_information.year,
        genres: album.basic_information.genres
      }
      this.dbAlbumArr.push(newAlbum);
    }
    console.log(this.dbAlbumArr)
  }

}


// mongodb+srv://Admin:<password>@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App