import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.sass'
})
export class LoginPageComponent {
  http = inject(HttpClient);

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

    const httpObserver:{} = {
      next: (res:{})=>{
        console.log("logged in successfully");
        console.log(res);
        const { user, token } = res as {user:User, token:string};
        localStorage.setItem("token", JSON.stringify(res));
      },
      error: (err:any)=>{
        console.log(err.error.error);
        this.changeLoginMessage(err.error.error);
      },
      complete: ()=>{},
    }

    try{
      this.http.post(`${this.serverAddress}/login`, userLoginObj).subscribe( 
        httpObserver
  )
    }
    catch(err:any){
      const errorMessage:string = err.error.error;
      console.log(err.error);
      console.log(errorMessage);
    }
  }

}
