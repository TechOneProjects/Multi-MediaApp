import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getDatabaseMovies(databaseUrl: string): Observable<any> {
    const headers = new HttpHeaders ({
      "Content-Type": "application/json"
    })

    return this.http.get(databaseUrl, { headers})
  }
}
