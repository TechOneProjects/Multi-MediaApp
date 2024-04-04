import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieResolveService {

  constructor() { }

  // followed example in stackoverflow
  private subjects = new BehaviorSubject("")
  getDetails = this.subjects.asObservable();
    sendData(movieId: any, title: any, poster_path: any) {
      let body: any = {
        movieId: movieId,
        title: title,
        poster_path: poster_path
      }
      this.subjects.next(body)
    }
}
