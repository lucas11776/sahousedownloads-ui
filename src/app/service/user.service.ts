import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';

import { UserAccount }      from '../models/user';
import { Login, LoginResponse } from '../models/login';
import { HttpErrorService } from './http-error.service';
import { Register, RegisterResponse } from '../models/register'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * User details
   * 
   * @var {Observable<UserAccount>}
   */
  user: Observable<UserAccount>;

  constructor(private http: HttpClient, private httpError: HttpErrorService) {
    // decrypt user token from serve
    this.user = this.http.post<UserAccount>('user/account', {}).pipe(
      retry(2), take(1), catchError(this.httpError.error)
    );
  }

  /**
   * Register user/client
   * 
   * @param {Register}
   * @return {Observable<RegisterResponse>}
   */
  register(application:Register): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>('register', application).pipe(
      retry(2), take(1), catchError(this.httpError.getError)
    );
  }

  /**
   * Login user/client
   * 
   * @param {Login}
   * @return {Observable<LoginResponse>}
   */
  login(Login:Login): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('login', Login).pipe(
      retry(2), take(1), catchError(this.httpError.getError)
    );
  }

}
