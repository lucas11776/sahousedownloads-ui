import { Component, OnInit } from '@angular/core';

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

  constructor(private user: UserService) {
    this.view = false;
  }

  ngOnInit() {
  }

  registerUser($event:Register){
    this.clear(); // clear errors
    this.user.register($event).subscribe(
      response => this.registerResponse = response,
      error    => this.error = error
    );
  }

  loginUser($event:Login){
    this.clear(); // clear errors
    this.user.login($event).subscribe(
      response => this.loginResponse = response,
      error    => this.error = error
    );
  }

  switchView(){
    this.clear(); // clear errors
    this.view = !this.view;
  }

  clear(){
    this.error = null;
    this.loginResponse = null;
    // check if user has not register
    if(typeof(this.registerResponse) === 'object'){
      if(this.registerResponse.response !== true){
        this.registerResponse = null;
      }
    }
  }

}
