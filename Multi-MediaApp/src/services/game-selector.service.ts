import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class GameSelectorService {

  apiKey: string = '117cfff8b638cab7f2ed1f3737b4b05984266915'
  apiUrl: string = `https://www.giantbomb.com/api/games/?api_key=${this.apiKey}`
  resourceID: string = '3030-4725'
  gamesFound: boolean = false;
  ongoingGames: [] = []
  finishedGames: [] = []

  constructor(private http: HttpClient) { }
  databaseUrl: string = 'http://localhost:3000/games'
  getAllGames(): Observable<any> {
    const headers = new HttpHeaders ({
      "Content-Type": "application/json"
    })
    return this.http.get(this.databaseUrl, {headers}); 
  }

  searchForGame(name: string) {
    
  }
  deleteGame(name: string){
    
  }

  accessGamesApi() {
  
  }
}
