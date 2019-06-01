import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate{
  
  constructor(private router: Router, private authServ: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
    return this.authServ.guest().pipe(
      map((allowed) => {
        allowed === false ? this.router.navigate(['']) : null;
        return allowed;
      })
    );
  }

}
