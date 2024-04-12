import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';
import { AboutHakiComponent } from './about-haki/about-haki.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralAboutUsPageComponent, AboutHakiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Multi-MediaApp';
}
