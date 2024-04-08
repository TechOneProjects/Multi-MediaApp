import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {

  constructor(private http: HttpClient) { }

  addMovie(movieData: any): Observable<any> {
    const url = "http://localhost:3000/movies"
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })

    return this.http.post(url, movieData, {headers})
  }
}
