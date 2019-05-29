import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';
import { Register, RegisterResponse }    from '../../models/register';
import { HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  error:string;
  registerResponse:RegisterResponse;
  loginResponse: {response:boolean,data:{username:string,password:string}};
  hasAccount:boolean;
  view:boolean; // true == login-view || false == register-view

  constructor(private user: UserService) {
    this.view = false;
  }

  ngOnInit() {
  }

  registerUser($event:Register){
    this.clear(); // clear errors
    this.user.register($event).subscribe(
      response => this.registerResponse = response,
      error => this.error = error
    );
  }

  loginUser($event:Login){
    this.clear(); // clear errors
    this.user.login($event).subscribe(
      
    );
  }

  switchView(){
    this.clear(); // clear errors
    this.view = !this.view;
  }

  clear(){
    this.error = null;
    this.registerResponse = null;
    this.loginResponse = null;
  }

}
