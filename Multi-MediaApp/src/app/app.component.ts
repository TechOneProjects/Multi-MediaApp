import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralAboutUsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Multi-MediaApp';
}
