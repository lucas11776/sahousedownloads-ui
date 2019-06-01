import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import { Register, RegisterResponse }    from '../../models/register';
import { Login, LoginResponse } from 'src/app/models/login';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  error:string;

  registerResponse:RegisterResponse;

  loginResponse: LoginResponse;

  hasAccount:boolean = false;
  
  view:boolean; // (true = login || false = register)

  constructor(private user: UserService, private router: Router) {
    this.view = false;
  }

  ngOnInit() {
  }

  registerUser($event:Register){
    this.clear();
    this.user.register($event).subscribe(
      response => {
        this.registerResponse = response;
        if(response.response){
          this.hasAccount = response.response;
        }
      },
      error => this.error = error
    );
  }

  loginUser($event:Login){
    this.clear(); // clear errors
    this.user.login($event).subscribe(
      response => {
        this.loginResponse = response;
        if(response.response){
          this.user.setToken(response.data.token);
          this.router.navigate(['']);
        }
      },
      error => this.error = error
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
