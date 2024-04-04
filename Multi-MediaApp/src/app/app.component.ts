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
  ngOnInit(): void {
    this.http.get("http://localhost:3000/").subscribe(data=>console.log(data));
  }
}
