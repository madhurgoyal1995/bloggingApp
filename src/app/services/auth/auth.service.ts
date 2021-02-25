import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Backend Url for register user.
  //http://localhost:3000/users
  private registerUrl = "https://my-json-server.typicode.com/madhurgoyal1995/backend/users";

  constructor(private http: HttpClient, private router: Router) { }

  // save data for new user.
  registeruser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  // If user is logged in or not returns true if SessionId available and false if not.
  loggedIn() {
    return !!localStorage.getItem('SessionId');
  }

  // User logout.
  logoutUser() {
    localStorage.removeItem('SessionId');
    this.router.navigate(['/login']);
  }
}
