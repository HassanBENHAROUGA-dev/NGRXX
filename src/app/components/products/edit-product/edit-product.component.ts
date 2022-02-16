import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {
  EditProductsAction,
  NewProductsAction,
  ProductActions,
  UpdateProductsAction
} from "../../../ngrx/products.actions";
import {ProductsState, ProductStateEnum} from "../../../ngrx/products.reducer";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public formBuild:boolean=false;
  submitted:boolean=false;
  productId:number;
  state:ProductsState|null=null;
  productFormGroup:FormGroup|null=null;
  readonly ProductsStateEnum=ProductStateEnum;
  constructor(private activatedRoute:ActivatedRoute,private store:Store<any>,private fb:FormBuilder, private router:Router) {
    this.productId=activatedRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    //on a besoin de déclarer à nouveau le type du reducer car on l'a pas transmit de d'autre composants pere par @Input
    this.store.dispatch(new EditProductsAction(this.productId))
    this.store.subscribe(state=>{
      this.state= state.productsStateStore;
      if(this.state?.dataState==this.ProductsStateEnum.LOADED){
        if(this.state?.currentProduct!=null){
          this.productFormGroup=this.fb.group({
            id:[this.state?.currentProduct.id,Validators.required],
            name:[this.state.currentProduct.name,Validators.required],
            price:[this.state.currentProduct.price,Validators.required],
            quantity:[this.state.currentProduct.quantity,Validators.required],
            selected:[this.state.currentProduct.selected],
            available:[this.state.currentProduct.available],
          });
          this.formBuild=true;
        }
      }
      //Deuxiéme  méthode static pour afficher l'objet
      /*if (this.state?.dataState==state.LOADED){
        this.productFormGroup=this.fb.group({});
        let data = this.state?.currentProduct;
        for (let f in data){
          // @ts-ignore
          this.productFormGroup.addControl(f,new FormControl(data[f], Validators.required))
        }
        this.formBuild=true;
      }*/
    });
  }

  okUpdated() {
    this.router.navigateByUrl("/products")
    //this.store.dispatch(new EditProductsAction(this.productId))
  }

  onUpdatedProduct() {
    this.submitted=true;
    if(this.productFormGroup?.invalid) return ;
    this.store.dispatch(new UpdateProductsAction(this.productFormGroup?.value))
  }
}
