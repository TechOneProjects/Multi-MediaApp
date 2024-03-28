import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaPage2Component } from './media-page-2/media-page-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaPage2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Multi-MediaApp';
}
