import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: "test@mail.com", password: "test"})
    })
    const data = await response.json();
    localStorage.setItem("token", data)
    this.isLoggedIn = true;
  }
 
  ngOnInit(): void {
    this.testLogin();
    this.http.get("http://localhost:3000/").subscribe(data=>console.log(data));
  }
}
