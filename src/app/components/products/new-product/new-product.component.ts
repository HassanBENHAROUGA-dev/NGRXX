import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductStateEnum} from "../../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {NewProductsAction, SaveProductsAction, SaveProductsActionSuccess} from "../../../ngrx/products.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup:FormGroup|null=null;
  state:ProductsState|null=null;
  readonly ProductsStateEnum=ProductStateEnum;
  submitted:boolean=false;
  //form$ = this.store.select(state => state.form);
  public formBuild: boolean=false;
  constructor(private store:Store<any>, private fb:FormBuilder) {
    //this.active$ = store.select(store => store.items);
  }

  ngOnInit(): void {
    this.store.dispatch(new NewProductsAction({}))//maintennant on a recu un nouveau state qui est NEW
    this.store.subscribe(state=>{
      this.state= state.productsStateStore//definir pour le store le type du reducer(ProductsReducer)
      if(this.state?.dataState==this.ProductsStateEnum.NEW){
          this.productFormGroup=this.fb.group({
            name:["",Validators.required],
            price:["",Validators.required],
            quantity:["",Validators.required],
            selected:[true],
            available:[true],
          });
          this.formBuild=true;
      }
    })
  }

  newProduct() {
      this.store.dispatch(new NewProductsAction({}))
  }

  onSaveProduct() {
    this.submitted=true;
    if(!this.productFormGroup?.valid) return;
    this.store.dispatch(new SaveProductsAction((this.productFormGroup?.value)));


  }
}
