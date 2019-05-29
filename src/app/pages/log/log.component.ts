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

  httpError:string;
  registerResponse:RegisterResponse;
  loginResponse: {response:boolean,data:{username:string,password:string}};

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  registerUser($event:Register){
    this.registerResponse = null; // clear prev response (on register)
    this.httpError = null;        // clear http error (on register)
    this.user.register($event).subscribe(
      response => this.registerResponse = response,
      error => this.httpError = error
    )
  }

  loginUser(){
    this.loginResponse = null;
  }

}
