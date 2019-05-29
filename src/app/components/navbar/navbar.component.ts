import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private formBulder: FormBuilder, 
              private searchServ: SearchService) { }

  ngOnInit(){}
}
