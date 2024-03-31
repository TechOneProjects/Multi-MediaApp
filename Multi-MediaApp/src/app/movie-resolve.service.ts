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
    sendData(movieId: any, title: any, complete_poster_path: any) {
      let body: any = {
        movieId: movieId,
        title: title,
        complete_poster_path: complete_poster_path
      }
      this.subjects.next(body)
    }
}
