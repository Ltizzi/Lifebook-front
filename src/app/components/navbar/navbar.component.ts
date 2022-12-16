import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged: Boolean = false;

  user: any;

  constructor(
    private authServ: AuthService,
    private userServ: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let email: String = this.authServ.currentUser;
    if (email) {
      this.isLogged = true;
      if (!sessionStorage.getItem('user')) {
        this.userServ.get('/getByJWT', '').subscribe((data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
          this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
          console.log(this.user);
        });
      } else {
        this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
        console.log(this.user);
      }
    }
  }

  logout() {
    this.authServ.logout();
    this.isLogged = false;
    location.reload();
  }
}
