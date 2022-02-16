import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetALLProductsAction,
  GetSelectedProductsAction,
  ProductsActionsType,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {ProductsState, ProductStateEnum} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  public state:ProductsState|null=null
  readonly productActionsType=ProductsActionsType;
  constructor(private store:Store<any>,private route:Router) { }

  ngOnInit(): void {
    this.store.subscribe(MyCurrentState=>{
      this.state=MyCurrentState.productsStateStore
    })
  }

  OnGetAllProducts() {
    this.store.dispatch(new GetALLProductsAction({}))
  }

  OnGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword))
  }

  OnNewProductS() {
    this.route.navigateByUrl("/newProduct")
  }
}
