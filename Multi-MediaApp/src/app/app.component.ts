import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { SargePageComponent } from './sarge-page/sarge-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralAboutUsPageComponent, LoginPageComponent, SargePageComponent,
    RouterLink, HomepageComponent, SignUpComponent, MatDividerModule, MatButton, MatSidenavModule, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',

  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Multi-MediaApp';
  http = inject(HttpClient);
  isLoggedIn: boolean = false;
  displayLogin: boolean = false;
  

  Displaylogin() {
    this.displayLogin = !this.displayLogin;
  }
  logmein(event: boolean) {
    this.isLoggedIn = event;
  }
  async testLogin(): Promise<void> {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer<token>"
      },
     
    })
    const data = await response.json();
    // token data comes back as a random, hashed string
    localStorage.setItem("token", data)
    this.isLoggedIn = true;
  }

  ngOnInit(): void {
    //this.testLogin();
    //this.http.get("http://localhost:3000/").subscribe(data=>console.log(data));
  }


}
