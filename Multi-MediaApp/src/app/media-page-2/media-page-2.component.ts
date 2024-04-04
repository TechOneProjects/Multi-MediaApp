import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';
import { MovieResolveService } from '../movie-resolve.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-media-page-2',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    AddMovieComponent,
    InfiniteScrollModule,
  ],
  templateUrl: './media-page-2.component.html',
  styleUrl: './media-page-2.component.sass',
})
export class MediaPage2Component {
  constructor(public dialog: MatDialog, private router: Router) {}

  movieResolveService = inject(MovieResolveService);
  openDialog(): void {
    this.dialog.open(AddMovieComponent);
  }

  openUpdateDialog(
    movieId: string,
    title: string,
    complete_poster_path: string
  ): void {
    console.log(movieId, title, complete_poster_path);
    this.dialog.open(UpdateMovieComponent);
    this.movieResolveService.sendData(movieId, title, complete_poster_path);
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
    const databaseUrl = 'http://localhost:5000/movies';
    axios
      .get(databaseUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((data: any) => {
        console.log(data.data);
        this.databaseMovies = data.data;
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

  verifyUser(): void {
    const token = localStorage.getItem("token")

    if(!token) {
      this.router.navigate(["/login"])
    }
  }

  ngOnInit(): void {
    this.fetchData();
    this.loadMovies();
    this.verifyUser();
  }
}
