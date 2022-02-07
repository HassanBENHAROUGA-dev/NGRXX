import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetALLProductsAction, GetALLProductsActionError,
  GetALLProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess,
  ProductActions,
  ProductsActionsType
} from "./products.actions";


@Injectable()
export class ProductsEffects {
  constructor(private productsService:ProductsService, private effectActions:Actions) {
  }

  getAllProductsEffect:Observable<Action> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.GET_ALL_PRODUCTS),
      /*The Angular MergeMap maps each value from the source
      observable into an inner observable, subscribes to it,
      and then starts emitting the values from it replacing the original value.
      It creates a new inner observable for every value it receives from the Source.
      * */
      mergeMap((action)=>{
          return this.productsService.getAllProducts()
            .pipe(
              map((products)=> new GetALLProductsActionSuccess(products)),
              catchError((err)=>of(new GetALLProductsActionError(err.message)))
            )
        /*Quand je recois une action,donc CreateEffect  va utiliser effecActions.pipe comme subscribe
        * puis il va tester si cette action est par exemple de type ProductsActionsType.GET_ALL_PRODUCTS et si elle
        * est de ce type je fais mergeMap et  je prend l'action que j'ai recu(ProductsActionsType.GET_ALL_PRODUCTS)
        *  et je fais après appel au service  productsService.getAllProducts() puis je fais un pipe et dès qu'il y'a
        * un resultat qui arrive j'ai une liste de produits et donc je dois retourner une action qui est
        * new GetALLProductsActionSuccess(products) et dans cette action je met dans son payload la liste des produits
        * qui est au final GetALLProductsActionSuccess(products)*/
      })
    )
  );

  /*GetSelectedProductEffect*/
  getSelectedProductsEffect:Observable<Action> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsType.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
        return this.productsService.getSelectedProduct()
          .pipe(
            map((products)=> new GetSelectedProductsActionSuccess(products)),
            catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
          )
      })
    )
  );


}
