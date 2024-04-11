import { Component, OnInit, inject } from '@angular/core';
import {  DBAlbum } from './album.interface';
import { AlbumDisplayComponent } from '../album-display/album-display.component';
import { AlbumSearchComponent } from '../album-search/album-search.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-chases-music',
  standalone: true,
  imports: [ AlbumDisplayComponent,  AlbumSearchComponent, MatButtonModule],
  templateUrl: './chases-music.component.html',
  styleUrl: './chases-music.component.sass'
})
export class ChasesMusicComponent implements OnInit{


  dbAlbumArr : DBAlbum[] = [];

  selectedComp: string = "album";

  switchComp(comp : string) {
    // this.fetchDiscogs();
    this.selectedComp = comp;
  }

  async addAlbum(album: DBAlbum) {
    console.log(album)
    const response = await fetch("http://localhost:3000/albums/new", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        artist: album.artist,
        title: album.title, 
        genres: album.genres,
        cover_image: album.cover_image})
    })
    const data = await response.json();
    if(response.status == 200) {
      this.dbAlbumArr.push(data)
    }else {
      alert("Error adding album. Please check your log in.")
    }
  }

  async fetchDB(): Promise<void> {
    try {
      const response = await fetch("http://localhost:3000/albums")
      const data = await response.json();
      console.log(data)
      this.dbAlbumArr = data;
    } catch (error) {
      console.log(error);
    }
  }


  async ngOnInit(): Promise<void> {
    this.fetchDB();
  }

}
