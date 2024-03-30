import { Component, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import axios from 'axios';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from '../add-movie/add-movie.component';

@Component({
  selector: 'app-media-page-2',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AddMovieComponent],
  templateUrl: './media-page-2.component.html',
  styleUrl: './media-page-2.component.sass',
})
export class MediaPage2Component {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AddMovieComponent);
  }
  baseUrl: string = 'https://api.themoviedb.org/3';
  trendingUrl: string = `${this.baseUrl}/trending/movie/day?language=en-US`;

  options: Object = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGFhMjRhZjc0ZjBmMjgzOTQ1MGQ2YzNjMWExN2IwNiIsInN1YiI6IjY2MDMzMzYzNDU5YWQ2MDE0YWY4MzgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fDdVhB1xJLvQsTnOPPkTUdqSk-wrjNF0bqmxQ83X5Fo',
    },
  };

  trendingResults: any[] = [];

  trendingTop3: any[] = [];

  databaseMovies: any[] = [];

  loadMovies() {
    const databaseUrl = 'http://localhost:3000/data';
    axios.get(databaseUrl).then((data) => {
      this.databaseMovies = data
    });
  }

  fetchData(): void {
    axios
      .get(this.trendingUrl, this.options)
      .then((json) => {
        this.trendingResults = json.data.results;
        if (this.trendingResults.length > 0) {
          this.trendingTop3.push(this.trendingResults[0]);
          this.trendingTop3.push(this.trendingResults[1]);
          this.trendingTop3.push(this.trendingResults[2]);
        }
      })
      .catch((err) => console.error('error:' + err));
  }

  getData(array: any[]) {
    return JSON.stringify(array);
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
