import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService extends DataService {
  constructor(http: HttpClient, authServ: AuthService) {
    super('http://localhost:8080/user', http, authServ);
  }
}
