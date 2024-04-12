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
export class LoginPageComponent implements OnInit {
  http = inject(HttpClient);
  serverAddress:string = "http://localhost:3000/users";
  allUserData:{email:String, password:String}[] = [];
  loginMessage:String = "";

  ngOnInit(): void {
    this.http.get(this.serverAddress).subscribe(response => {
      this.allUserData = response as {email:String, password:String}[]
    })
  }
  
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

    const getUser:{email:String, password:String} | undefined = this.allUserData.find( ( user:{ email:String, password:String } ) => {
      return userLoginObj.email === user.email && userLoginObj.password === user.password;
    }) // get user should be sending a full http request to the server

    if (getUser) {
      console.log('found user : ', getUser);
      this.changeLoginMessage("User found!!");
    }
    else {
      this.changeLoginMessage("ERROR: User not found!!");
    }

  }

}
