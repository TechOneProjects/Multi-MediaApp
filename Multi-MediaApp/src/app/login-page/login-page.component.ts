import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setUser } from '../actions/user.actions';
import { User } from '../user';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.sass'
})
export class LoginPageComponent {
  http = inject(HttpClient);
  store = inject(Store);

  serverAddress:string = "http://localhost:3000/auth";

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
      // console.log(res);
      const { user, token } = res as {user:User, token:string};
      this.store.dispatch(setUser())
      localStorage.setItem("token", JSON.stringify(res));
      
    })
  }

  getUserFromStore(){
    console.log("getting user");
    console.log(this.store.select('user'));
  }

}
