import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';
import { Register, RegisterResponse }    from '../../models/register';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  registerUser($event:Register){
    this.clear('register'); // clear errors
    this.user.register($event).subscribe(
      response => this.registerResponse = response,
      error => this.error = error
    )
  }

  loginUser(){
    this.clear('login'); // clear errors
  }

  clear(request:string){
    this.error = null;
    switch(request){
      case 'register':
        this.registerResponse = null;
        break;
      case 'login':
        this.loginResponse = null;
        break;
    }
  }

}
