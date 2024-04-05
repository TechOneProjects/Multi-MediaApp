import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'Multi-MediaApp';
  http = inject(HttpClient);
  isLoggedIn: boolean = false;


  async testLogin(): Promise<void> {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer<token>"
      },
      body: JSON.stringify({email: "test@mail.com", password: "test"})
    })
    const data = await response.json();
    console.log(data);
    // token data comes back as a random, hashed string
    localStorage.setItem("token", data)
    this.isLoggedIn = true;
  }
 
  ngOnInit(): void {
    //this.testLogin();
    //this.http.get("http://localhost:3000/").subscribe(data=>console.log(data));
  }
}
