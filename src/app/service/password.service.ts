import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, take, catchError } from 'rxjs/operators';

import { RecoverPassword, ResetPassword, ResetPasswordReponse, RecoverPasswordResponse } from '../models/password';
import { HttpErrorService } from './http-error.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient, private error: HttpErrorService) { }

  recoverPassword(recover: RecoverPassword): Observable<RecoverPasswordResponse>{
    return this.http.post<RecoverPasswordResponse>('password/recover', recover).pipe(
      retry(2),
      take(1),
      catchError(this.error.getError)
    );
  }

  resetPassword(reset: ResetPassword): Observable<ResetPasswordReponse>{
    return this.http.post<ResetPasswordReponse>('password/reset', reset).pipe(
      retry(2),
      take(1),
      catchError(this.error.getError)
    );
  }

}
