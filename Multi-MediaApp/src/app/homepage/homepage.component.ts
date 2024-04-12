import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  @Output() logOutEvent = new EventEmitter<boolean>();
  
  logOut(value: boolean) {
    this.logOutEvent.emit(value);
  }

 
}
