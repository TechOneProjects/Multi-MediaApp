import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-janette',
  standalone: true,
  imports: [],
  templateUrl: './janette.component.html',
  styleUrl: './janette.component.sass',
})
export class JanetteComponent {
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
