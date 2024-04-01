import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Featured } from "./featured.interface"

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent implements OnInit{
  allFeatured: any = {}
  featuredMedia: Featured | undefined
  
  changeSelectedMedia(option: string) : void {
    this.featuredMedia = this.allFeatured[option]
  }
  
  async fetchFeatured() : Promise<void> {
    const response = await fetch(`http://localhost:3000/featured`);
    const data = await response.json();
    this.allFeatured = data;
    this.featuredMedia = data.music

    //pseudo response
    // this.featuredMedia.type = music;
  }
  
  ngOnInit(): void {
    this.fetchFeatured();
  }
}
