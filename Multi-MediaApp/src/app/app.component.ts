import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, inject } from '@angular/core';
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
export class AppComponent implements OnChanges, OnInit {
  title = 'Multi-MediaApp';
  http = inject(HttpClient);
  isLoggedIn: boolean = false;
  displayLogin: boolean = false;
  
  logOut(){
    localStorage.removeItem("token")
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
 
  ngOnChanges(): void {
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
}
