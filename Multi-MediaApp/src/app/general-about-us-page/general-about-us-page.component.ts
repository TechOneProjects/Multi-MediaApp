import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-general-about-us-page',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './general-about-us-page.component.html',
  styleUrl: './general-about-us-page.component.sass',
})
export class GeneralAboutUsPageComponent {
  constructor(private router: Router) {}

  verifyUser(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.verifyUser();
  }
}
