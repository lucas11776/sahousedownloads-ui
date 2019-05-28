import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Handle http error
   * 
   * @param HttpErrorResponse
   * @return Error
   */
  error(httpError: HttpErrorResponse){

    console.log(httpError);

    return throwError('some error message');
  }

}
