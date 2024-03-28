import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.sass'
})
export class LoginPageComponent {
  userInfo:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmitForm(){
    console.log(this.userInfo);
  }
}
