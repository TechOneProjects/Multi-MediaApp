import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSelectorService } from 'src/services/game-selector.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatListModule} from '@angular/material/list'
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-video-games',
  standalone: true,
  imports: [ReactiveFormsModule, MatListModule, MatButtonModule, BrowserAnimationsModule],
  templateUrl: './video-games.component.html',
  styleUrl: './video-games.component.sass'
})
export class VideoGamesComponent implements OnInit {
  apiAccessSuccessful: boolean = false
  logData:string = ''
  gamesSelector = inject(GameSelectorService)
  inputData: string = ''

  gameDataHolder: {
    name: string,
     description: string, 
     image_path: string} = {
      name: '',
       description: '', 
       image_path: ''}

  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image_path: new FormControl('')

  })  
  constructor(private router: Router){}

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
    this.gamesSelector.getAllGames()

  }
}