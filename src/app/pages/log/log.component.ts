import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map }    from 'rxjs/operators';

import { UserService } from '../../service/user.service';
import { Register, RegisterResponse }  from '../../models/register';
import { Login, LoginResponse }        from 'src/app/models/login';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  registerResponse:RegisterResponse;

  loginResponse: LoginResponse;

  hasAccount:boolean;

  async:boolean;
  
  error:string;
  
  view:boolean;

  constructor(private user: UserService, private router: Router) {
    this.view       = true;
    this.hasAccount = false;
    this.async      = false;
  }

  ngOnInit() {
  }

  registerUser($event:Register){
    this.clear();
    this.async = true;
    this.user.register($event)
    .pipe(
      map(response => {
        response.response === true ? this.hasAccount = true : null;
        this.async = false;
        return response;
      })
    )
    .subscribe(
      response => this.registerResponse = response,
      error    => {
        this.error = error;
        this.async = false;
      }
    )
  }

  loginUser($event:Login){
    this.clear();
    this.user.login($event)
    .pipe(
      map(response => {
        this.async = false;
        if(response.response){
          this.user.setToken(response.data.token);
          this.router.navigate(['']);
        }
        return response;
      })
    )
    .subscribe(
      response => this.loginResponse = response,
      error    => {
        this.error = error;
        this.async = false;
      }
    );
  }

  switchView(){
    this.clear();
    this.view = !this.view;
  }

  clear(){
    this.error = null;
    this.loginResponse = null;
    this.registerResponse = null;
  }

}
