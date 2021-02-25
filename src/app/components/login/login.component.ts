import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert: boolean = false;
  tokenString: string = "token@grapecity";

  constructor(private authService: AuthService, private router: Router) { }

  loginUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit(): void {
  }

  logIn() {
    if (this.loginUser.get('email').value == "blogger@grapecity.com" && this.loginUser.get('password').value == "1qaz!QAZ") {

      console.log("In login method");

      // Setting up sessionid or token in local storage for authorization guard.
      localStorage.setItem("SessionId", this.loginUser.get('email').value + this.tokenString)

      //Routing to home page after succesfull login.
      this.router.navigate(['']);

    }
    else {
      alert("Please enter valid credentials...!!");
    }
  }

}
