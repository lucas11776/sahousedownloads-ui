import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output('register') registerEvent = new EventEmitter<Register>();

  registerForm:FormGroup;

  constructor(private formBulider: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBulider.group({
      'username': ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(50) ]],
      'email':    ['', [ Validators.required, Validators.maxLength(50), Validators.email ]],
      'name':     ['', [ Validators.maxLength(50) ]],
      'surname':  ['', [ Validators.maxLength(50) ]],
      'password': ['', [ Validators.required, Validators.pattern('[(a-z|A-Z){4,6}(0-9){1,}(!|@|#|$|%|^|*|(|)|+|?){1,}]{6,20}') ]],
      'confirm_password': ['', [ this.passwordMatch ]]
    });

  }

  emailExist(control:FormControl){
    return null;
  }

  usernameExist(control:FormControl){
    return null;
  }

  passwordMatch(control:FormControl){
    if(control){
      const confirmPasswordControl = control.root.get('confirm_password');
      if(confirmPasswordControl){
        const password        = control.value;
        const confirmPassword = confirmPasswordControl.value;
        if(password !== confirmPassword){
          return {passwordMatch: true};
        }
        return {passwordMatch: false}
      }
    }
    return false;
  }

  register(){
    this.registerEvent.emit(this.registerForm.value);
  }

}
