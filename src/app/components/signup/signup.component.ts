import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  addUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),

  })

  ngOnInit(): void {
  }

  // Save user method.
  saveUser() {
    this.authService.registeruser(this.addUser.value)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
          alert("Some error occuured..");
        }
      )
  }
}
