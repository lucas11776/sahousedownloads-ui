import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http: HttpClient) { }

  user(): Observable<boolean>{
    return undefined;
  }

  editor(): Observable<boolean>{
    return undefined;
  }

  admin(): Observable<boolean>{
    return undefined;
  }

}
