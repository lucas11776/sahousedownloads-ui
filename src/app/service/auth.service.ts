import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, retry }  from 'rxjs/operators';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userServ: UserService) { }

  /**
   * Check if user logged in
   * 
   * @return {Observable<boolean>}
   */
  user(): Observable<boolean>{
    return this.userServ.user.pipe(
      retry(2),
      map(response => response.role === 1 || response.role === 2 || response.role === 3),
      take(1)
    );
  }

  /**
   * Check if user is editor
   * 
   * @return {Observable<boolean>}
   */
  editor(): Observable<boolean>{
    return this.userServ.user.pipe(
      retry(2),
      map(response => response.role === 2 || response.role === 3),
      take(1)
    );
  }

  /**
   * Check if user is administrator
   * 
   * @return {Observable<boolean>}
   */
  admin(): Observable<boolean>{
    return this.userServ.user.pipe(
      retry(2),
      map(response => response.role === 3),
      take(1)
    );
  }

}
