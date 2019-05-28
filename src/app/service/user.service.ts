import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { UserAccount } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<UserAccount>;

  constructor(private http: HttpClient) {
    // get user details form token
    this.user = this.http.post<UserAccount>('user/account', {}).pipe(
      retry(2)
    );
  }


}
