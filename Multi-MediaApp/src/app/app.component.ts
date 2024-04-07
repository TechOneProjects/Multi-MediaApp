import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChasesMusicComponent } from './chases-music/chases-music.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChasesMusicComponent],
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
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTG9va3VwIjp7Il9pZCI6IjY2MGY2ZGFjNzQ5MTVlZWI5MjRiYTg5ZCIsImVtYWlsIjoiY2ZvcmxpbmkyNEBnYW1pbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwidXNlcm5hbWUiOiJjZm9ybGluaSIsIl9fdiI6MH0sImlhdCI6MTcxMjM0ODI5OH0.dTuoy7a3pzsnI2cMXJoCDmF88pk-tHBojMDz830MLEE`
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
    // this.testLogin();
    // this.http.get("http://localhost:3000/").subscribe(data=>console.log(data));
  }
}
