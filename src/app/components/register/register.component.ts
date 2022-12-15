import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerControl = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  register() {
    console.log(this.registerControl.value);
  }

  get FirstName() {
    return this.registerControl.get('firstName');
  }

  get LastName() {
    return this.registerControl.get('lastName');
  }

  get Username() {
    return this.registerControl.get('username');
  }

  get Email() {
    return this.registerControl.get('email');
  }

  get Password() {
    return this.registerControl.get('password');
  }
}
