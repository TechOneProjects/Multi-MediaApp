import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { User } from "../../../server/schemas/userSchema";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.sass'
})
export class SignUpComponent {

  userInfo = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  async onSubmit(){
    // logic that adds new users to the databse

    const newUser = new User({
      username: this.userInfo.value.username,
      email: this.userInfo.value.email,
      password: this.userInfo.value.password
    })
    if (this.userInfo.value.password === this.userInfo.value.confirmPassword) {
      
    }
  }

}
