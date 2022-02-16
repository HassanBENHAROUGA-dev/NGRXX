import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }

  getSelectedProduct():Observable<Product[]>{
    let host=environment.host
    return this.http.get<Product[]>(host+"/products?selected=true");
  }

  getAvailableProduct():Observable<Product[]>{
    let host=environment.host
    return this.http.get<Product[]>(host+"/products?available=true");
  }

  getSearchProduct(keyword:string):Observable<Product[]>{
    let host=environment.host
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }

  select(product:Product):Observable<Product>{
    let host=environment.host
    //product.selected=!product.selected;
    return this.http.put<Product>(environment.host+"/products/"+product.id,{...product,selected:!product.selected});
  }

  deleteProduct(product:Product):Observable<void>{
    let host=environment.host
    return this.http.delete<void>(host+"/products/"+product.id);
  }

  save(product:Product):Observable<Product>{
    let host=environment.host
    return this.http.post<Product>(host+"/products",product);
  }

  getProduct(id:number):Observable<Product>{
    let host=environment.host
    return this.http.get<Product>(host+"/products/"+id);
  }

  updateProduct(product:Product):Observable<Product>{
    let host=environment.host
    return this.http.patch<Product>(host+"/products/"+product.id,product);
  }
}
