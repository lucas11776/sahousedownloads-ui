import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';

import { UserAccount }      from '../models/user';
import { HttpErrorService } from './http-error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<UserAccount>;

  constructor(private http: HttpClient, private httpError: HttpErrorService) {
    // get user details form token
    this.user = this.http.post<UserAccount>('user/account', {}).pipe(
      retry(2),
      take(1),
      catchError(this.httpError.error)
    );
  }


}
