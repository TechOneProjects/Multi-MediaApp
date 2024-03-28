import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.sass'
})
export class LoginPageComponent {
  http = inject(HttpClient);
  serverAddress:string = "http://localhost:3000/users";
  userInfo:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmitForm():void{
    console.log(this.userInfo);

    const userLoginObj:Object = {
      "email": this.userInfo.value.email,
      "password": this.userInfo.value.password
    }
  }
}
