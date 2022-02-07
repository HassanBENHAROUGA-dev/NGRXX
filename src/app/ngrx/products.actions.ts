import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsType{
  GET_ALL_PRODUCTS="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

  /*Get Selected products*/
  GET_SELECTED_PRODUCTS="[Products] Get SELECTED products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get SELECTED products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get SELECTED products Error",
}

export class GetALLProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.GET_ALL_PRODUCTS;
  constructor(public payload:any){

  }
}

export class GetALLProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}

export class GetALLProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:String){

  }
}

/*Get Selected Products Actions*/
export class GetSelectedProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.GET_SELECTED_PRODUCTS;
  constructor(public payload:any){

  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:String){

  }
}
export  type ProductActions =
  GetALLProductsAction | GetALLProductsActionSuccess | GetALLProductsActionError |
  GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError ;

