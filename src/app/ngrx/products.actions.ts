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

  /*Get Search products*/
  SEARCH_PRODUCTS="[Products] Search products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search products Success",
  SEARCH_PRODUCTS_ERROR="[Products] Search products Error",

  /*Select products*/
  SELECT_PRODUCTS="[Products] Select products",
  SELECT_PRODUCTS_SUCCESS="[Products] Select products Success",
  SELECT_PRODUCTS_ERROR="[Products] Select products Error",

  /*Delete products*/
  DELETE_PRODUCTS="[Products] Delete products",
  DELETE_PRODUCTS_SUCCESS="[Products] Delete products Success",
  DELETE_PRODUCTS_ERROR="[Products] Delete products Error",

  /*New products*/
  NEW_PRODUCTS="[Products] New products",
  NEW_PRODUCTS_SUCCESS="[Products] New products Success",
  NEW_PRODUCTS_ERROR="[Products] New products Error",

  /*Save products*/
  SAVE_PRODUCTS="[Products] Save products",
  SAVE_PRODUCTS_SUCCESS="[Products] Save products Success",
  SAVE_PRODUCTS_ERROR="[Products] Save products Error",

  /*Edit products*/
  EDIT_PRODUCTS="[Products] Edit products",
  EDIT_PRODUCTS_SUCCESS="[Products] Edit products Success",
  EDIT_PRODUCTS_ERROR="[Products] Edit products Error",

  /*Update products*/
  UPDATE_PRODUCTS="[Products] Update products",
  UPDATE_PRODUCTS_SUCCESS="[Products] Update products Success",
  UPDATE_PRODUCTS_ERROR="[Products] Update products Error",

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
  constructor(public payload:string){

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
  constructor(public payload:string){

  }
}

/*Search Products Actions*/
export class SearchProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.SEARCH_PRODUCTS;
  constructor(public payload:string){

  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

/*Select Products Actions*/
export class SelectProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.SELECT_PRODUCTS;
  constructor(public payload:Product){

  }
}

export class SelectProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.SELECT_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}

export class SelectProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.SELECT_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

/*Delete Products Actions*/
export class DeleteProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.DELETE_PRODUCTS;
  constructor(public payload:Product){

  }
}

export class DeleteProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.DELETE_PRODUCTS_SUCCESS;
  constructor(public payload:any){

  }
}

export class DeleteProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.DELETE_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

/*New Products Actions*/
export class NewProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.NEW_PRODUCTS;
  constructor(public payload:any){

  }
}

export class NewProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.NEW_PRODUCTS_SUCCESS;
  constructor(public payload:any){

  }
}

export class NewProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.NEW_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

/*Save Products Actions*/
export class SaveProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.SAVE_PRODUCTS;
  constructor(public payload:Product){

  }
}

export class SaveProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.SAVE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}

export class SaveProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.SAVE_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

/*Edit Products Actions*/
export class EditProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.EDIT_PRODUCTS;
  constructor(public payload:number){

  }
}

export class EditProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.EDIT_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}

export class EditProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.EDIT_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

/*Update Products Actions*/
export class UpdateProductsAction implements Action{
  type: ProductsActionsType=ProductsActionsType.UPDATE_PRODUCTS;
  constructor(public payload:Product){

  }
}

export class UpdateProductsActionSuccess implements Action{
  type: ProductsActionsType=ProductsActionsType.UPDATE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}

export class UpdateProductsActionError implements Action{
  type: ProductsActionsType=ProductsActionsType.UPDATE_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

export  type ProductActions =
  GetALLProductsAction | GetALLProductsActionSuccess | GetALLProductsActionError |
  GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
  SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError |
  SelectProductsAction | SelectProductsActionSuccess | SelectProductsActionError |
  DeleteProductsAction | DeleteProductsActionSuccess | DeleteProductsActionError |
  NewProductsAction | NewProductsActionSuccess | NewProductsActionError |
  SaveProductsAction | SaveProductsActionSuccess | SaveProductsActionError |
  EditProductsAction | EditProductsActionSuccess | EditProductsActionError |
  UpdateProductsAction | UpdateProductsActionSuccess | UpdateProductsActionError;

