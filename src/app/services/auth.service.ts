import { UserService } from './user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSubject: BehaviorSubject<any>;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: '*/*',
  });

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
    console.log('El servicio de autenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('token') || '{}')
    );
  }

  login(credentials: any): Observable<any> {
    const body = JSON.stringify(credentials);
    const options = { headers: this.headers };
    return this.http
      .post('http://localhost:8080/auth/login', body, options)
      .pipe(
        map((data: any) => {
          if (data) {
            sessionStorage.setItem('token', JSON.stringify(data.token));
            this.currentUserSubject.next(data.token);
            return data.email;
          }
          return null;
        })
      );
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  isLoggedIn() {
    if (
      sessionStorage.getItem('token') != null &&
      this.jwtHelper.isTokenExpired()
    )
      return true;
    else return false;
  }

  get currentUser() {
    if (sessionStorage.getItem('token') != null && !this.isTokenExpired()) {
      console.log(
        'El mail del usuario es ' +
          this.jwtHelper.decodeToken(this.currentUserSubject.value).sub
      );

      return this.jwtHelper.decodeToken(this.currentUserSubject.value).sub;
    } else return null;
  }

  get token() {
    return this.currentUserSubject.value;
  }

  isAdmin() {
    if (
      sessionStorage.getItem('token') != null &&
      this.currentUser.scope[0] == 'ADMIN'
    )
      return true;
    else return false;
  }

  isTokenExpired() {
    let token: any = sessionStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }
}
