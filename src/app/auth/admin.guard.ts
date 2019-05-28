import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  canActivate(route: RouterStateSnapshot, state: ActivatedRouteSnapshot): Observable<boolean>
  {
    return null;
  }

}
