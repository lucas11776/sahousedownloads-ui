import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map }    from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

 
import { ResetPasswordReponse, RecoverPasswordResponse } from '../../models/password';
import { PasswordService }      from '../../service/password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  response:RecoverPasswordResponse;
  
  resetForm:FormGroup;
  
  error:string;
  
  token:string;

  constructor(private formBulider: FormBuilder, 
              private passwordServ: PasswordService,
              private router: Router) { }

  ngOnInit() {
    this.resetForm = this.formBulider.group({
      'token':            [this.token, [Validators.required]],
      'password':         ['', [ Validators.required]],
      'confirm_password': ['', [Validators.required]]
    });
  }

  reset(){
    this.passwordServ.resetPassword(this.resetForm.value)
    .pipe(
      
    )
    .subscribe(
      response => this.response = response,
      error    => this.error    = error
    )
  }

}
