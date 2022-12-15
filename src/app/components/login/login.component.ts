import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginControl = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  login() {
    console.log('logueando..');
    console.log(this.loginControl.value);
    this.router.navigate(['/']);
  }

  get Email() {
    return this.loginControl.get('email');
  }

  get Password() {
    return this.loginControl.get('password');
  }
}
