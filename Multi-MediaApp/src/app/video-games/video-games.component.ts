import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSelectorService } from 'src/services/game-selector.service';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatListModule} from '@angular/material/list'
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-games',
  standalone: true,
  imports: [],
  templateUrl: './video-games.component.html',
  styleUrl: './video-games.component.sass'
})
export class VideoGamesComponent implements OnInit {

  apiAccessSuccessful: boolean = false
  logData:string = ''
  gamesSelector = inject(GameSelectorService)
  inputData: string = ''
  
  constructor(private router: Router){
    
  }

  verifyUser(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/']);
    }else{
      //possibly initialize local games array here
    }
  }

  ngOnInit(): void {
    //this.verifyUser();
    this.gamesSelector.getAllGames().subscribe((games) => {
      console.log(`All games: ${games}`)
    },
    (error) => {
      console.error('Error fetching games ', error)
    }
  )
  }
}