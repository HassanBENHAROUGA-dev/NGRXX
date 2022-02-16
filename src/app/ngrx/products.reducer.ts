import {Product} from "../model/product.model";
import {ProductActions, ProductsActionsType} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="New",
  EDIT="Edit",
  UPDATED="Updated"
}

export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductStateEnum,
  currentProduct:Product|null,
  currentAction:ProductActions|null
}

const InitState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductStateEnum.INITIAL,
  currentProduct:null,
  currentAction:null,
}

export function ProductsReducer(state=InitState, action:Action):ProductsState{//return statement de type ProductsState
    switch (action.type){
      /*Get All Products*/
      case ProductsActionsType.GET_ALL_PRODUCTS://cette actopn va etre declancher ou dispatcher par ihm ou bien user
        return {...state, dataState: ProductStateEnum.LOADING,currentAction:(<ProductActions>action) }//cloner et copier le state
      case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.LOADED, products:(<ProductActions>action).payload,currentAction:(<ProductActions>action)}//Concataination pour connaitre le type de l'action
      case ProductsActionsType.GET_ALL_PRODUCTS_ERROR://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Get Selected Products*/
      case ProductsActionsType.GET_SELECTED_PRODUCTS://cette actopn va etre declancher ou dispatcher par ihm ou bien user
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}//cloner et copier le state
      case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.LOADED, products:(<ProductActions>action).payload,currentAction:(<ProductActions>action)}
      case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR://cette action va etre dispatcher par le serveur(Effect)
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Search Products*/
      case ProductsActionsType.SEARCH_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}
      case ProductsActionsType.SEARCH_PRODUCTS_SUCCESS:
        return {...state, dataState: ProductStateEnum.LOADED, products:(<ProductActions>action).payload,currentAction:(<ProductActions>action)}
      case ProductsActionsType.SEARCH_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Select Products*/
      case ProductsActionsType.SELECT_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}
      case ProductsActionsType.SELECT_PRODUCTS_SUCCESS:
        let product:Product = (<ProductActions>action).payload
        let listProducts=[...state.products]
        let data:Product[] = listProducts.map(p=>p.id==product.id?product:p)
        /*if(p.id==product.id){p=product }else{p }*/
        return {...state, dataState: ProductStateEnum.LOADED,products:data,currentAction:(<ProductActions>action)}
      case ProductsActionsType.SELECT_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Delete Products*/
      case ProductsActionsType.DELETE_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}
      case ProductsActionsType.DELETE_PRODUCTS_SUCCESS:
        let prod:Product = (<ProductActions>action).payload
        let listProductsDel=[...state.products]
        let index = state.products.indexOf(prod)
        /*listProductsDel.forEach((element,index)=>{
          if(element.id==prod.id) delete listProductsDel[index]
        });*/
        listProductsDel.splice(index,1)
        return {...state, dataState: ProductStateEnum.LOADED,products:listProductsDel,currentAction:(<ProductActions>action)}
      case ProductsActionsType.DELETE_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*New Products*/
      case ProductsActionsType.NEW_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}
      case ProductsActionsType.NEW_PRODUCTS_SUCCESS:
        return {...state, dataState: ProductStateEnum.NEW,currentAction:(<ProductActions>action)}//Demander au formulaire de s'afficher
      case ProductsActionsType.NEW_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Save Products*/
      case ProductsActionsType.SAVE_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING,currentAction:(<ProductActions>action) }
      case ProductsActionsType.SAVE_PRODUCTS_SUCCESS:
        let prods:Product[] = [...state.products];
        prods.push((<ProductActions>action).payload);//Ajouter le produit dans la liste pour le synchroniser avec le store
        return {...state, dataState: ProductStateEnum.LOADED,products:prods,currentAction:(<ProductActions>action)}
      case ProductsActionsType.SAVE_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Edit Products*/
      case ProductsActionsType.EDIT_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}
      case ProductsActionsType.EDIT_PRODUCTS_SUCCESS:
        return {...state, dataState: ProductStateEnum.LOADED,currentProduct:(<ProductActions>action).payload,currentAction:(<ProductActions>action)}
      case ProductsActionsType.EDIT_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}

      /*Update Products*/
      case ProductsActionsType.UPDATE_PRODUCTS:
        return {...state, dataState: ProductStateEnum.LOADING ,currentAction:(<ProductActions>action)}
      case ProductsActionsType.UPDATE_PRODUCTS_SUCCESS:
        let updatedProduct:Product=(<ProductActions>action).payload
        let UpdatedprodList:Product[]=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p)
        return {...state, dataState: ProductStateEnum.UPDATED,products:UpdatedprodList,currentAction:(<ProductActions>action)}
      case ProductsActionsType.UPDATE_PRODUCTS_ERROR:
        return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload,currentAction:(<ProductActions>action)}


      default : return {...state,currentAction:(<ProductActions>action)}
    }
}

