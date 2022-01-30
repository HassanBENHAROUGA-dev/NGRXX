export enum ProductActionsTypeS{
    GET_ALL_PRODUCTS = "[Product] Get All Products",
    GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
    GET_AVAILABLE_PRODUCTS = "[Product] Get Available Products",
    SEARCH_PRODUCTS = "[Product] Search Products",
    NEW_PRODUCT = "[Product] New Product",
    SELECT_PRODUCT = "[Product] Select Product",
    EDIT_PRODUCT = "[Product] Edit Product",
    DELETE_PRODUCT = "[Product] Delete Product",
    PRODUCT_ADDED = "[Product] product added",
    PRODUCT_UPDATED = "[Product] product updated",
}
//npm install --save currently
//npm install --save json-server
export interface ActionEvent {
  type:ProductActionsTypeS,
  payload?:any
}
export enum DataStateEnuM {
  LOADING,
  LOADED,
  ERROR,
}

export interface  AppDataState<T> {
  dataState?: DataStateEnuM,
  data?:T,//type T ca peut etre liste de produits et ca peut etre d'autre chose
  errorMessage?:string
  //?=>veux dire que la présence des ces variables dans l'objet est facultatif
}
