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
    const response = await fetch("http://localhost:3000/albums/new", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
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


  async ngOnInit(): Promise<void> {
    this.fetchDB();
  }

}
