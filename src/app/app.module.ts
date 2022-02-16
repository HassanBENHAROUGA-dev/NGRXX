import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ProductsReducer} from "./ngrx/products.reducer";
import {ProductsEffects} from "./ngrx/products.effects";
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //On doit déclarer les Reducers et les Effects
    StoreModule.forRoot({productsStateStore:ProductsReducer}),//ici on spécifie le reducers
    EffectsModule.forRoot([ProductsEffects]),//ici on spécifie les effects
    StoreDevtoolsModule.instrument(),//comme ca on va l'activer, au démarrage de l'application à chaque fois qu'il y'a quelque chose qui se passe dans ngrx il va notifier le plugin de google chrome redux qu'on peut ajouter
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
