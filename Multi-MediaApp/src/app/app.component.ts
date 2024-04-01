import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Multi-MediaApp';
}
