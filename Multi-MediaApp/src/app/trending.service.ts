import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrendingMovies(trendingUrl: string, options: any): Observable<any> {
    return this.http.get(trendingUrl, options);
  }
}
