import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators'

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private authServ: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.authServ.user().pipe(
      map(allowed => {
        allowed === false ? this.router.navigate(['log']) : null;
        return allowed;
      })
    );
  }

}
