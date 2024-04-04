import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {  DBAlbum } from './album.interface';
import { AlbumDisplayComponent } from '../album-display/album-display.component';
import { AlbumSearchComponent } from '../album-search/album-search.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-chases-music',
  standalone: true,
  imports: [ReactiveFormsModule, AlbumDisplayComponent,  AlbumSearchComponent, MatButtonModule],
  templateUrl: './chases-music.component.html',
  styleUrl: './chases-music.component.sass'
})
export class ChasesMusicComponent implements OnInit{
  formBuilder = inject(FormBuilder);

  elemetnsArr: string[] = [];
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

  async addAlbum(album: DBAlbum) {
    const response = await fetch("http://localhost:3000/albums/new", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(album)
    })
    const data = await response.json();
    this.dbAlbumArr.push(data)
  }

  async fetchDB(): Promise<void> {
    try {
      const response = await fetch("http://localhost:3000/albums")
      const data = await response.json();
      this.dbAlbumArr = data;
    } catch (error) {
      console.log(error);
    }
  }

  // async fetchDiscogs():Promise<void> {
  //   try {
  //     const response = await fetch("https://api.discogs.com/users/cforlini/collection/folders/0/releases", {
  //       headers: {
  //         "Authorization": "Discogs key=wTPpJsCySNodlbLlmBsP, secret=RwsRavuQuLPLnIruuDDptdhAKmHIHcYy"
  //       }});
  //       const data = await response.json();
  //       this.albumArr = data.releases;
  //       this.transformData();
  //       // console.log(this.albumArr)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // async checkLogin() : Promise<void> {
  //   const response = await fetch("https://api.discogs.com/oauth/identity", {
  //     headers: {
  //       "Authorization" : `OAuth oauth_consumer_key="wTPpJsCySNodlbLlmBsP",oauth_token="mvOSiWtKTcQLpvODAnhfivIyJncuYExFgAkrxDwh",oauth_signature_method="PLAINTEXT",oauth_timestamp="${new Date().getTime()}",oauth_nonce="${uuidv4()}",oauth_version="1.0",oauth_signature="RwsRavuQuLPLnIruuDDptdhAKmHIHcYy%26SGJOxupzMPQDgZIyTvViHWsJThUgANniOGwpOVcK"`,
  //       "Cookie" : "__cf_bm=ZRBJhla1.0V8zQKzEXR5RrnbmF6PH_mKFT3CsNNdBDQ-1712082306-1.0.1.1-VddeI_5khmbe24ebOy2ZIHXihH7CFausk7qzUcN.66Ic.qvCT7rhUOjpXQEFj_1Xlj56RG7XaFXpQ6_5bJn44Q"
  //     }
  //   })
  //   const data = await response.json();
  //   console.log(data);
  // }

  async ngOnInit(): Promise<void> {
    this.fetchDB();
  }

}


// mongodb+srv://Admin:<password>@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App