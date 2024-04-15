import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SargePageComponent } from './sarge-page/sarge-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,SargePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Multi-MediaApp';
}
