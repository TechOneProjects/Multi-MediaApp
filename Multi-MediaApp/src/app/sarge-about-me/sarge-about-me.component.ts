import { Component } from '@angular/core';
import { AboutMeVideosAboutMeSongComponent } from '../about-me-videos-about-me-song/about-me-videos-about-me-song.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sarge-about-me',
  standalone: true,
  imports: [AboutMeVideosAboutMeSongComponent ,RouterOutlet,RouterLink,MatDividerModule, MatCardModule],
  templateUrl: './sarge-about-me.component.html',
  styleUrl: './sarge-about-me.component.sass'
})
export class SargeAboutMeComponent {

}
