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


  async onSubmitForm(){
    console.log(this.userInfo);

    const userLoginObj:{email:String, password:String} = {
      'email': this.userInfo.value.email,
      'password': this.userInfo.value.password
    }

    const getUser:{email:String, password:String} | undefined = this.allUserData.find( ( user:{ email:String, password:String } ) => {
      // if(userLoginObj.email === user.email && userLoginObj.password === user.password)
      // {
      //   return user;
      // }
      return userLoginObj.email === user.email && userLoginObj.password === user.password;
    })

    if (getUser) {
      console.log('found user : ', getUser);
    }

  }

}
