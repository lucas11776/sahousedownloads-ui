import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': '7ce602fac6951a4c677fa211a21d22726ea7d8229832fd4fcac93a1608c88f3946abf504dce74eb38156f805835b9ed070f017ea728b171d0a2360b0df0e52e9i8BKAeKDF5u+oS4MUiavlq8BNUpgQO5rqlgDcUTv8w9dHcoOAfo8CkfYXLw/42zXDBEYvnDbRgl3EWFnK+6OYZCVbz6y/0oQAEC0y8+7qlz8JhjB+PIru8FZSElK7t03'
      }
    })
    return next.handle(req);
  }

}
