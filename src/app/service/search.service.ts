import { Injectable }      from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject = new BehaviorSubject<string>("");
  
  /**
   * Navbar search Observable
   * 
   * @return {Observable<string>}
   */
  public search = this.subject;
  
  /**
   * Emit/Push value to observable
   * @param term 
   */
  emit(value:string){
    this.subject.next(value)
  }

}
