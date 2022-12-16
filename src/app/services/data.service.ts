import { AppError } from './../common/app-error';
import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    @Inject(String) private url: string,
    // @Inject(String) private path: string,
    // @Inject(String) private params: string,
    private http: HttpClient,
    private authServ: AuthService
  ) {}

  token = this.authServ.token;
  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
    'Content-Type': 'application/json',
  });

  getAll(path: String) {
    return this.http.get(this.url + path, { headers: this.header }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  get(path: String, params: String) {
    return this.http
      .get(this.url + path + params, { headers: this.header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  create(path: String, params: String, data: any) {
    return this.http
      .post(this.url + path + params, data, { headers: this.header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  update(path: String, params: String, data: any) {
    return this.http
      .patch(this.url + path + params, data, { headers: this.header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  delete(path: String, params: String) {
    return this.http
      .delete(this.url + path + params, { headers: this.header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(() => new NotFoundError());
    } else if (error.status === 400) {
      return throwError(() => new BadRequestError(error));
    } else return throwError(() => new AppError(error));
  }
}
