import { AuthService } from './../../services/auth.service';
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

  invalidLogin: Boolean = false;

  constructor(private router: Router, private authServ: AuthService) {}

  login(event: Event) {
    event.preventDefault;
    console.log('logueando..');
    let data = this.loginControl.value;
    this.authServ.login(data).subscribe((response) => {
      if (response != null) {
        this.router.navigate(['/']);
      } else {
        this.invalidLogin = true;
      }
    });
  }

  get Email() {
    return this.loginControl.get('email');
  }

  get Password() {
    return this.loginControl.get('password');
  }
}
