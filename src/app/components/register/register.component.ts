import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
      'confirm_password': ['', [ Validators.required, this.passwordMatch ]]
    });
  }

  emailExist(control:FormControl){
    return false;
  }

  usernameExist(control:FormControl){
    return false;
  }

  passwordMatch(control:FormControl){
    if(control){
      const password = control.root.get('password').value;
      const confirm_password = control.value();
      if(password !== confirm_password){
        return { password_match : false };
      }
      return true;
    }
    return false;
  }

  register(){
    this.registerEvent.emit(this.registerForm.value);
  }

}
