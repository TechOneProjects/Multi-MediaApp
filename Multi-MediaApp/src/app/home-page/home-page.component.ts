import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Featured } from "./featured.interface"
import {MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, MatTabsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent implements OnInit{
  allFeatured: any = {
    "movies" : {
      "imageURL" : "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
      "contentDesc" : "Dune: Part Two"
    },
     "music" : {
      "imageURL" : "https://i.discogs.com/F_KSyKjGi2YN5SBttMhdgP2zyNdmHv7HHWvDVGj3Shg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTA3/OTgtMTM4ODYyMzYx/MS0yMzYyLmpwZWc.jpeg",
      "contentDesc": "Radiohead - Ok, Computer" 
    },
     "games" : {
      "imageURL" : "../../assets/games.png",
      "contentDesc": "Video Games Collection" 
    },
     "gallery" : {
      "imageURL" : "../../assets/gallery.png",
      "contentDesc": "Art Gallery" 
    },
     "characters" : {
      "imageURL" : "",
      "contentDesc": "" 
    },
     "thoughts" : {
      "imageURL" : "",
      "contentDesc": "" 
    },
    
  }
  featuredMedia: Featured | undefined 
  
  changeSelectedMedia(option: string) : void {
    this.featuredMedia = this.allFeatured[option]
  }
  
  ngOnInit(): void {

  }
}
