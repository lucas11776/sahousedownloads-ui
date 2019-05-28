import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take }  from 'rxjs/operators';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userServ: UserService) { }

  user(): Observable<boolean>{
    return this.userServ.user.pipe(
      map(response => response.role === 1),
      take(1),
    );
  }

  editor(): Observable<boolean>{
    return this.userServ.user.pipe(
      map(response => response.role === 2),
      take(1)
    );
  }

  admin(): Observable<boolean>{
    return this.userServ.user.pipe(
      map(response => response.role === 3),
      take(1)
    );
  }

}
