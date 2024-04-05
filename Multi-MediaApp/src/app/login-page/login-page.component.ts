import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.sass'
})
export class LoginPageComponent {
  http = inject(HttpClient);
  serverAddress:string = "http://localhost:3000/auth";
  allUserData:{email:String, password:String}[] = [];
  loginMessage:String = "";
  
  userInfo:FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  changeLoginMessage(message:String){
    this.loginMessage = message;
    setTimeout(() => {
      this.loginMessage = "";
    }, 10000);
  }

  async onSubmitForm(){
    const userLoginObj:{email:String, password:String} = {
      'email': this.userInfo.value.email,
      'password': this.userInfo.value.password
    }

    this.http.post(`${this.serverAddress}/login`, userLoginObj).subscribe( res => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res));
    })

  }

}
