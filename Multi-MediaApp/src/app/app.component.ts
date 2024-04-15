
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'Multi-MediaApp';
  http = inject(HttpClient);
  isLoggedIn: boolean = false;
  displayLogin: boolean = false;
  
  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    this.isLoggedIn = false;
  }
 
  ngOnInit(): void {
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
}
