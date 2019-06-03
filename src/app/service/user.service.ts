import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';

import { UserAccount }           from '../models/user';
import { Login, LoginResponse }  from '../models/login';
import { HttpErrorService }      from './http-error.service';
import { Register, RegisterResponse } from '../models/register'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * User details
   * 
   * @var { Observable<UserAccount> }
   */
  user: Observable<UserAccount>;

  constructor(private http: HttpClient, private httpError: HttpErrorService) {
    // decrypt user token from serve
    this.user = this.http.post<UserAccount>('user/account', {}).pipe(
      retry(2), take(1), catchError(this.httpError.error)
    );
  }

  /**
   * Get user form database using (username/email)
   * 
   * @param username 
   * @return {}
   */
  getUser(user){
    return this.http.post('api', user).pipe(
      retry(2), take(1), catchError(this.httpError.getError)
    );
  }

  /**
   * Register user/client
   * 
   * @param Arra
   * @return Observable<RegisterResponse>
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
   * @return Observable<LoginResponse>
   */
  login(Login:Login){
    return this.http.post<LoginResponse>('login', Login).pipe(
      retry(2), take(1), catchError(this.httpError.getError)
    );
  }

  /**
   * Get user token in brower storage
   * 
   * @return string
   */
  setToken(token:string){
    return window.localStorage.setItem('token', token);
  }

  /**
   * Store user token in session
   */
  getToken(){
    const token = window.localStorage.getItem('token');
    return token === null ? '' : token;
  }

}