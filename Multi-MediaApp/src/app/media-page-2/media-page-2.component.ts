import { Component } from '@angular/core';
import axios from 'axios';
import {MatCardModule} from "@angular/material/card"

@Component({
  selector: 'app-media-page-2',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './media-page-2.component.html',
  styleUrl: './media-page-2.component.sass',
})
export class MediaPage2Component {
  baseUrl: string = "https://api.themoviedb.org/3"
  trendingUrl: string =
    `${this.baseUrl}/trending/movie/day?language=en-US`;

  options: Object = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGFhMjRhZjc0ZjBmMjgzOTQ1MGQ2YzNjMWExN2IwNiIsInN1YiI6IjY2MDMzMzYzNDU5YWQ2MDE0YWY4MzgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fDdVhB1xJLvQsTnOPPkTUdqSk-wrjNF0bqmxQ83X5Fo',
    },
  };

  trendingResults: any[] = []

  trendingTop3: any[] = []

  fetchData():void {
    axios
      .get(this.trendingUrl, this.options)
      .then((json) => {
        
        this.trendingResults = json.data.results
        if (this.trendingResults.length > 0) {
          this.trendingTop3.push(this.trendingResults[0])
          this.trendingTop3.push(this.trendingResults[1])
          this.trendingTop3.push(this.trendingResults[2])

        }

        console.log(this.trendingTop3)
      })
      .catch((err) => console.error('error:' + err));
  }

  getImages(image: {poster_path:string}) {
    const baseImageUrl = "https://image.tmdb.org/t/p/original"
    const imageUrl = `${baseImageUrl}${image.poster_path}`

    return imageUrl
  }

  ngOnInit(): void {
    this.fetchData()
  }
}
