import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameSelectorService {
  gamesFound: boolean = false;
  updateStarted:boolean = false
  ongoingGames: { name: string, description: string, image_path: string }[] = []
  finishedGames: { name: string, description: string, image_path: string }[] = []
  databaseUrl: string = 'http://localhost:3000/games'
  headers = new Headers();
  constructor(private http: HttpClient) { }

  setupdateStatus(status:boolean){
    this.updateStarted = status
  }
  getAllGames() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
    this.http.get(this.databaseUrl).subscribe({
        next: (res:{}) => {

        },
        error: (err) => {
          console.log(`My error: `)
          console.log(err.error)
        }
      }
      )
  }

  getGames() {
    this.headers.append('Content-Type', 'application/json');

    fetch(this.databaseUrl, {
      method: 'GET',
      headers: this.headers
    })
      .then((response) => {
        console.log('Raw response data: ', response);
        return response.json(); // Parse response body as JSON
      })
      .then((json_body) => {
        console.log('JSON response body: ', json_body);
        return json_body;
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  updateGame(game:{name:string, description:string, image_path:string}) {
    //this.http.post
    //Corresponding item in collection is updated / find using name field

  }
  deleteGame(game:{name:string, description:string, image_path:string}) {

  }

  accessGamesApi() {

  }
}
