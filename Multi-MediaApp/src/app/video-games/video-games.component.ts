import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSelectorService } from 'src/services/game-selector.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list'
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { single } from 'rxjs';
// Define an interface for the form control values

@Component({
  selector: 'app-video-games',
  standalone: true,
  imports: [ReactiveFormsModule, MatListModule, MatButtonModule],
  templateUrl: './video-games.component.html',
  styleUrl: './video-games.component.sass'
})

export class VideoGamesComponent implements OnInit {
  apiAccessSuccessful: boolean = false
  logData: string = ''
  gamesSelector = inject(GameSelectorService)
  inputData: string = ''

  constructor(private router: Router) { }

  gameDataHolder: {
    _id: string | null,
    name: string | null,
    description: string | null,
    image_path: string | null, ongoing: boolean
  } = {
      _id: '',
      name: '',
      description: '',
      image_path: '',
      ongoing: true
    }

  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image_path: new FormControl('')

  })

  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image_path: new FormControl('')

  })

  verifyUser(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/']);
    } else {
      //possibly initialize local games array here
    }
  }

  test() {
    console.log('TEST')
  }
  reloadComponentWithRouting(): void {
    this.router.navigateByUrl('/games', { skipLocationChange: true }).then(() => {
      this.router.navigate(['app-video-games']);
    });
    console.log('Component Reloaded...')
  }
  reloadComponentWithoutRouting(): void {
    window.location.reload();
  }

  createGameFromComponent(createdGame: {
    name: string | null,
    description: string | null,
    image_path: string | null, ongoing: boolean
  }){
    console.log('Create in console called')
    this.gamesSelector.createAGame(createdGame)
    console.log('Create in console ended')
    this.reloadComponentWithoutRouting()
  }

  deleteGameFromComponent(deletedGame: {_id: string}){
    this.gamesSelector.deleteGame(deletedGame)
    this.reloadComponentWithoutRouting()
  }
  verifyGameUpdateData(updatedGame: {
    _id: string | null,
    name: string | null,
    description: string | null,
    image_path: string | null, ongoing: boolean
  }) {

    //Repeat step above for other properties and send dat ato service for processing
    //LIST all stes necessary to finsihs project and set time frames for commits


    try {
      this.gameDataHolder._id = updatedGame._id
      if (updatedGame.name !== '') {
        this.gameDataHolder.name = updatedGame.name
      }
      if (updatedGame.description !== '') {
        this.gameDataHolder.description = updatedGame.description
      }
      if (updatedGame.image_path !== '') {
        this.gameDataHolder.image_path = updatedGame.image_path
      }
        for (const key in this.gameDataHolder) {
          if (Object.prototype.hasOwnProperty.call(this.gameDataHolder, key)) {
            const value = this.gameDataHolder[key as keyof typeof this.gameDataHolder]; // Type assertion
            console.log(`Key: ${key}, Value: ${value}`);
          }
        }
      //Send data to game service
      this.gamesSelector.updateGame(this.gameDataHolder)
      this.reloadComponentWithoutRouting()
    } catch (err) {
      console.error(err)
    }

  }

  ngOnInit(): void {
    //this.verifyUser();
    this.gamesSelector.getAllGames()

  }
}