import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, RouterLink, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnChanges {
  title = 'Multi-MediaApp';
  http = inject(HttpClient);
  isLoggedIn: boolean = false;
  displayLogin: boolean = false;
  
  logOut(){
    localStorage.removeItem("token")
    this.isLoggedIn = false;
  }
 
  ngOnChanges(): void {
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
}
