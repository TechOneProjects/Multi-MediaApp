import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.sass'
})
export class SignUpComponent {

  userInfo: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required)
  })

  userService = inject(UserService)
  http = inject(HttpClient)
  async onSubmit(){
    // logic that adds new users to the databse
    const newUser:{}  = {
      id: uuidv4(),
      email: this.userInfo.value.email,
      password: this.userInfo.value.password,
      username: this.userInfo.value.username,
      passwordConfirmation: this.userInfo.value.passwordConfirmation
      
    }

    console.log(newUser)

    this.http.post("http://localhost:3000/auth/signup", newUser).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res));
    })
  }

}
