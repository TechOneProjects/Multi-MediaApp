import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteMovieService {
  constructor(private http: HttpClient) {}

  deleteMovie(movieId: string, url: string) : Observable<any> {
    return this.http.delete(url)
  }
}
