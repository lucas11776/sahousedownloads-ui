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
   * @return Observable
   */
  login(Login:Login): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('login', Login).pipe(
      retry(2), take(1), catchError(this.httpError.getError)
    );
  }

  /**
   * Get user token from brower storage
   * 
   * @return string
   */
  token(){
    return '7ce602fac6951a4c677fa211a21d22726ea7d8229832fd4fcac93a1608c88f3946abf504dce74eb38156f805835b9ed070f017ea728b171d0a2360b0df0e52e9i8BKAeKDF5u+oS4MUiavlq8BNUpgQO5rqlgDcUTv8w9dHcoOAfo8CkfYXLw/42zXDBEYvnDbRgl3EWFnK+6OYZCVbz6y/0oQAEC0y8+7qlz8JhjB+PIru8FZSElK7t03';
  }


}
