import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLogged: Boolean = false;

  constructor(private authServ: AuthService) {}

  ngOnInit(): void {
    this.isLogged = this.authServ.isLoggedIn();
  }
}
