import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';

import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:FormControl;
  searchForm:FormGroup;

  constructor(private formBulder: FormBuilder, private searchServ: SearchService) { }

  ngOnInit(){
    this.search = new FormControl('');
    this.searchForm = this.formBulder.group({
      'search': this.search
    });
    this.search.valueChanges.pipe(
      debounceTime(800)
    )
    .subscribe((value:string) => this.searchServ.emit(value));
  }

}
