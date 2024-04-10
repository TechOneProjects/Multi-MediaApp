import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChasesMusicComponent } from './chases-music/chases-music.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChasesMusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Multi-MediaApp';
}
