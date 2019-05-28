import { Injectable, OnInit} from '@angular/core';
import { Router }            from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError }        from 'rxjs';
import { retry, take } from 'rxjs/operators'

import { UserAccount } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Handle http error
   * 
   * @param {httpError} HttpErrorResponse - error response for serve or client
   * @return {Error}
   */
  error(httpError: HttpErrorResponse){

    // Unauthorized Access
    if(httpError.status === 401){
      // check if user logged in
      this.http.post<UserAccount>('user/account', {}).pipe(
        retry(2),
        take(1)
      )
      // get user details
      .subscribe(
        (response: UserAccount) => {
          // check if user logged in
          response.role === null ? this.router.navigate['log'] : this.router.navigate[''];
        },
        (error: HttpErrorResponse) => {
          // report error to back end servers
        }
      ).unsubscribe();
    }

    return throwError(httpError.message);
  }

  /**
   * Notifier user about error that accured in error model
   * 
   * @param {number} errorCode - http error code
   * @param {string} errorCodes - http error code
   * @return void
   */
  reportErrorUser(errorCode:number){
    // report error user
  }

}
