import { Component } from '@angular/core';
import { AboutMeVideosAboutMeSongComponent } from '../about-me-videos-about-me-song/about-me-videos-about-me-song.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sarge-about-me',
  standalone: true,
  imports: [AboutMeVideosAboutMeSongComponent ,RouterOutlet,RouterLink],
  templateUrl: './sarge-about-me.component.html',
  styleUrl: './sarge-about-me.component.sass'
})
export class SargeAboutMeComponent {

}
