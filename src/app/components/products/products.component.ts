import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {ProductsState, ProductStateEnum} from "../../ngrx/products.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsState$:Observable<ProductsState>|null=null
  readonly DataStateEnum = ProductStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.productsState$=this.store
          .pipe(
            map((state)=> state.productsStateStore)
            /*Quand on recoit le state on pointe sur le state suivant
            car dans le store on peux avoir plusieurs stores*/
          );
    //toute les données des actions qu'on recoit sont stocké en productsState$ qui les transmet avec @input vers ses composants fils
  }



}
