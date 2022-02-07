import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetALLProductsAction, GetSelectedProductsAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  OnGetAllProducts() {
    this.store.dispatch(new GetALLProductsAction({}))
  }

  OnGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }
}
