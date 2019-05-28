import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string;

  

}

export function getYear(age){
  var currentYear = 2019;
  return currentYear - age - 1;
}
