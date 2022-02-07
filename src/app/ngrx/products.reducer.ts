import {Product} from "../model/product.model";
import {ProductActions, ProductsActionsType} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}

export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductStateEnum
}

const InitState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductStateEnum.INITIAL
}

export function ProductsReducer(state=InitState, action:Action):ProductsState{//return statement de type ProductsState
    switch (action.type){
      case ProductsActionsType.GET_ALL_PRODUCTS://cette actopn va etre declancher ou dispatcher par ihm ou bien user
        return {...state, dataState: ProductStateEnum.LOADING }//cloner et copier le state
      case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.LOADED, products:(<ProductActions>action).payload}
      case ProductsActionsType.GET_ALL_PRODUCTS_ERROR://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload}

      case ProductsActionsType.GET_SELECTED_PRODUCTS://cette actopn va etre declancher ou dispatcher par ihm ou bien user
        return {...state, dataState: ProductStateEnum.LOADING }//cloner et copier le state
      case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.LOADED, products:(<ProductActions>action).payload}
      case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload}

      default : return {...state}
    }
}

