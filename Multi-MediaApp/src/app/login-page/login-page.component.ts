import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { User } from '../sign-up/sign-up.user.interface';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule, MatFormFieldModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  @Output() loginEvent = new EventEmitter<boolean>();
  logIn(value: boolean) {
    this.loginEvent.emit(value);
  }
  http = inject(HttpClient);


  serverAddress: string = "http://localhost:3000/auth";

  loginMessage: String = "";

  userInfo: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  changeLoginMessage(message: String) {
    this.loginMessage = message;
    setTimeout(() => {
      this.loginMessage = "";
    }, 10000);
  }

  async onSubmitForm() {
    const userLoginObj: { email: String, password: String } = {
      'email': this.userInfo.value.email,
      'password': this.userInfo.value.password
    }

    this.http.post(`${this.serverAddress}/login`, userLoginObj).subscribe(res => {
      console.log(res);
      const { user, token } = res as { user: User, token: string };

      localStorage.setItem("token", JSON.stringify(res));
      this.loginEvent.emit(true);
    })
  }

  getUserFromStore() {
    console.log("getting user");

  }

}