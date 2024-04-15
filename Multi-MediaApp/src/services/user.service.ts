import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { User } from "../app/sign-up/sign-up.user.interface";

@Injectable({
    providedIn: "root"
})

export class UserService {
    http = inject(HttpClient)

    createUser(user: any) {
        return this.http.post('http://localhost:3000/auth/signup', user)
    }
}