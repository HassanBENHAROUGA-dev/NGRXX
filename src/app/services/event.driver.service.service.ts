import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "../state/product.state";

@Injectable({
  providedIn: 'root'
})
export class EventDriverServiceService {
  /*git branch
  git branch decomposition1
  git checkout decomposition1
  git add .
  git commit -m "decomposition1"
  git push -u origin decomposition1*/
  sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>()
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
  constructor() { }
}
