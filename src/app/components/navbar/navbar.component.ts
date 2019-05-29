import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  search:FormControl;
  searchForm:FormGroup;

  constructor(private formBulder: FormBuilder) { }

  ngOnInit(){
    this.search = new FormControl('');
    this.searchForm = this.formBulder.group({
      search: this.search
    });
    // deley
    this.search.valueChanges.pipe(
      debounceTime(500)
    );
  }

  applicationSearch(){

  }

}
