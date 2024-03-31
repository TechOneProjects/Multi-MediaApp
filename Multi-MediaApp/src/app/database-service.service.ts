import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseServiceService {
  constructor(private http: HttpClient) {}

  updateMovie(data: any) {
    return this.http.put(`http://localhost:3000/data`, data);
  }
}
