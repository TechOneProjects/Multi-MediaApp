import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './sign-up.user.interface'
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButton, MatInputModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  @Output() signUpEvent = new EventEmitter<boolean>();
  logIn(value: boolean) {
    this.signUpEvent.emit(value);
  }
  userInfo: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required)
  })

  userService = inject(UserService)
  http = inject(HttpClient)
  async onSubmit() {
    //this.logIn(true);
    //logic that adds new users to the databse
    // const newUser: User = {
    //   id: uuidv4(),
    //   email: this.userInfo.value.email,
    //   password: this.userInfo.value.password,
    //   username: this.userInfo.value.username,
    //   passwordConfirmation: this.userInfo.value.passwordConfirmation

    // }

    // console.log(newUser)

    // this.http.post("http://localhost:3000/auth/signup", newUser).subscribe(res => {
    //   console.log(res)
    //   localStorage.setItem("token", JSON.stringify(res))
    // })
    
  }

}
