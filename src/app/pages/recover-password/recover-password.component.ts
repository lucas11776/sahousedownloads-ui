import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

import { RecoverPasswordResponse } from '../../models/password';
import { PasswordService } from '../../service/password.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  
  response:RecoverPasswordResponse;
  
  formGroup:FormGroup;

  recoverd:boolean;

  async:boolean;
  
  error:string;

  constructor(private formBuilder: FormBuilder, private passwordServ: PasswordService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'email': ['', [Validators.required]]
    });
  }

  usernameExist(control:FormControl){
    if(control){

    }
    return null;
  }

  recover() {
    this.async = true;
    this.passwordServ.recoverPassword(this.formGroup.value)
    .pipe(
      debounceTime(1200),
      map(response => {
        this.async = false;
        return response;
      })
    )
    .subscribe(
      response => this.response = response,
      error    => this.error    = error
    )
    .unsubscribe();
  }

}
