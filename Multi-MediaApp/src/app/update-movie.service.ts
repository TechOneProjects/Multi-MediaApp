import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMovieService {

  constructor(private http: HttpClient) { }

  updateMovie(movieId: string, updatedData: any, url: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this.http.put(url, updatedData, {headers})
  }

}
