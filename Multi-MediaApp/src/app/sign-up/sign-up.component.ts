import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './sign-up.user.interface'
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';



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
  http = inject(HttpClient)
  errorMessage: string = '';

  async onSubmit(){
    if (this.userInfo.invalid) {
      this.errorMessage = 'Please fill out all fields.';
      return;
    }
    if (this.userInfo.value.password !== this.userInfo.value.passwordConfirmation) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }
    const newUser: User = {
      id: uuidv4(),
      email: this.userInfo.value.email,
      password: this.userInfo.value.password,
      username: this.userInfo.value.username,
      passwordConfirmation: this.userInfo.value.passwordConfirmation
      
    }

    console.log(newUser)

    this.http.post("http://localhost:3000/auth/signup", newUser).subscribe((res: any) => {
      if (res.error){
        this.errorMessage = res.error;
      }
      else {
      console.log(res)
      localStorage.setItem("token", (res.token.token))
      localStorage.setItem("username", (res.username))
    }
    })

    this.userInfo.reset()
  }

}
