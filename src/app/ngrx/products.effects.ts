import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DeleteProductsActionError,
  DeleteProductsActionSuccess, EditProductsActionError, EditProductsActionSuccess,
  GetALLProductsAction,
  GetALLProductsActionError,
  GetALLProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess, NewProductsActionSuccess,
  ProductActions,
  ProductsActionsType, SaveProductsActionError, SaveProductsActionSuccess,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductsActionError,
  SelectProductsActionSuccess, UpdateProductsActionError, UpdateProductsActionSuccess
} from "./products.actions";
import {Product} from "../model/product.model";


@Injectable()
export class ProductsEffects {
  constructor(private productsService:ProductsService, private effectActions:Actions) {
  }

  getAllProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.GET_ALL_PRODUCTS),
      /*The Angular MergeMap maps each value from the source
      observable into an inner observable, subscribes to it,
      and then starts emitting the values from it replacing the original value.
      It creates a new inner observable for every value it receives from the Source.
      * */
      mergeMap((action:ProductActions)=>{//On doit déclarer le type d'action
          return this.productsService.getAllProducts()
            .pipe(
              map((products)=> new GetALLProductsActionSuccess(products)),
              catchError((err)=>of(new GetALLProductsActionError(err.message)))
            )
        /*Quand je recois une action de type ProductsActionsType.GET_ALL_PRODUCTS,donc CreateEffect  va utiliser effecActions.pipe comme subscribe
        * puis il va tester si cette action est de type ProductsActionsType.GET_ALL_PRODUCTS et si elle
        * est de ce type je fais mergeMap et  je prend l'action que j'ai recu(ProductsActionsType.GET_ALL_PRODUCTS)
        *  et je fais après appel au service  productsService.getAllProducts() puis je fais un pipe et dès qu'il y'a
        * un resultat qui arrive j'ai une liste de produits et donc je dois retourner une action qui est
        * new GetALLProductsActionSuccess(products) et dans cette action je met dans son payload la liste des produits
        * qui est au final GetALLProductsActionSuccess(products)*/
      })
    )
  );

  /*GetSelectedProductEffect*/
  getSelectedProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.GET_SELECTED_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.getSelectedProduct()
          .pipe(
            map((products)=> new GetSelectedProductsActionSuccess(products)),
            catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
          )
      })
    )
  );

  /*SearchProductEffect*/
  SearchProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.SEARCH_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.getSearchProduct(action.payload)
          .pipe(
            map((products)=> new SearchProductsActionSuccess(products)),
            catchError((err)=>of(new SearchProductsActionError(err.message)))
          )
      })
    )
  );

  /*SelectProductEffect*/
  SelectProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.SELECT_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.select(action.payload)
          .pipe(
            map((products)=> new SelectProductsActionSuccess(products)),
            catchError((err)=>of(new SelectProductsActionError(err.message)))
          )
      })
    )
  );

  /*DeleteProductEffect*/
  DeleteProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.DELETE_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.deleteProduct(action.payload)
          .pipe(
            map((products)=> new DeleteProductsActionSuccess(products)),
            catchError((err)=>of(new DeleteProductsActionError(err.message)))
          )
      })
    )
  );

  /*NewProductEffect*/
  NewProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.NEW_PRODUCTS),
      map((action:ProductActions)=>{
        return new NewProductsActionSuccess({});
      })
    )
  );

  /*SaveProductEffect*/
  SaveProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.SAVE_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.save(action.payload)
          .pipe(
            map((products)=> new SaveProductsActionSuccess(products)),
            catchError((err)=>of(new SaveProductsActionError(err.message)))
          )
      })
    )
  );

  /*EditProductEffect*/
  EditProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.EDIT_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.getProduct(action.payload)//le payload contient le id(number) qu'on a transmit directement
          .pipe(
            map((products)=> new EditProductsActionSuccess(products)),
            catchError((err)=>of(new EditProductsActionError(err.message)))
          )
      })
    )
  );

  /*UpdateProductEffect*/
  UpdateProductsEffect:Observable<ProductActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.UPDATE_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productsService.updateProduct(action.payload)
          .pipe(
            map((products)=> new UpdateProductsActionSuccess(products)),
            catchError((err)=>of(new UpdateProductsActionError(err.message)))
          )
      })
    )
  );




}
