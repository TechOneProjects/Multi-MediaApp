import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSelectorService {
  gamesFound: boolean = false;
  updateStarted: boolean = false
  createStarted: boolean = false
  gameObj: {} = {
    name: '',
    description: '',
    image_path: '',
    ongoing: true
  }
  gamesArray: {}[] = []
  ongoingGames: { _id: string, name: string, description: string, image_path: string, ongoing: boolean }[] = []
  finishedGames: { _id: string, name: string, description: string, image_path: string, ongoing: boolean }[] = []
  databaseUrl: string = 'http://localhost:3000/games'
  headers = new Headers();
  selectedGameID: string = ''

  constructor(private http: HttpClient) { }

  setUpdateStatus(status: boolean, _id: string) {
    this.updateStarted = status
    this.selectedGameID = _id
  }

  setCreateStatus(status: boolean) {
    this.createStarted = status

  }
  getAllGames() {
    this.http.get(this.databaseUrl).subscribe({
      next: (res: any) => {
        this.gamesFound = true

        //Convert incoming data into array of game objects
        const jsonArray = JSON.parse(JSON.stringify(res))

        jsonArray.forEach((game: { _id: string, name: string, description: string, image_path: string, ongoing: boolean }) => {
          //Sort Games
          if (game.ongoing)
            this.ongoingGames.push(game)
          else
            this.finishedGames.push(game)
        });
        console.log(`ongoing: ${this.ongoingGames[0].name}`)
      },
      error: (err) => {
        console.log(`Error while subscribing to observable from server: `)
        console.log(err.error)
      }
    }
    )
  }

  getSelectedGameID(): string {
    return this.selectedGameID
  }

  createAGame(game: {
    name: string | null,
    description: string | null,
    image_path: string | null,
    ongoing: boolean
  }) {
    const createEndpoint = '/create'
    this.http.post((this.databaseUrl + createEndpoint),game).subscribe({
      next: (res: any) => {
        //console.log(`REsponse: ${JSON.stringify(res)}`)
      },
      error: (err) => {
        console.log(`Error during post request: ${JSON.stringify(err)}`)
      }
    })
  }

  updateGame(game: {
    _id: string | null,
    name: string | null,
    description: string | null,
    image_path: string | null,
    ongoing: boolean
  }) {

    console.log('Update Method Reached')

    const updateEndpoint = '/update'

    console.log(`Update game name: ${game.name}`)

    Object.keys(game).forEach(key => {
      const value = game[key as keyof typeof game]; // Type assertion for TypeScript
      console.log(`Key: ${key}, Value: ${value}`);
    });
    console.log(`game id before router: ${game._id}`)

    this.http.put((
      this.databaseUrl + `/${game._id}`),
      game)
      .subscribe({
        next: (res: any) => {
          //console.log(`REsponse: ${JSON.stringify(res)}`)
        },
        error: (err) => {
          console.log(`Error during post request: ${JSON.stringify(err)}`)
        }
      })
    //Corresponding item in collection is updated / find using name field
    this.getAllGames()
    console.log('Update Method eNDED')

    this.setUpdateStatus(false, '')
  }

  deleteGame(game: {_id: string | null}) {
    console.log('Delete started...')
    this.http.delete(this.databaseUrl + `/${game._id}`)
    .subscribe({
      next: (res: any) => {
        //console.log(`REsponse: ${JSON.stringify(res)}`)
      },
      error: (err) => {
        console.log(`Error during post request: ${JSON.stringify(err)}`)
      }
    })
    console.log('Delete ended...')

  }

}
