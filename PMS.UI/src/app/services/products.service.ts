import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    ApiBaseUrl : string = "https://localhost:7026";

  constructor(private http: HttpClient) { }
  getAllProducts():Observable<Product[]>{  
     return this.http.get<Product[]>(this.ApiBaseUrl + '/api/products')
  }
  addProduct(newProduct: Product){
    newProduct.id='00000000-0000-0000-0000-000000000000';

    return this.http.post<Product>(this.ApiBaseUrl + '/api/products',newProduct);

  }

  getProduct(id:string) : Observable<Product> {

    return this.http.get<Product>(this.ApiBaseUrl + '/api/products/' + id);

  }
  updateProduct(id:string,updateProductObj:Product):Observable<Product> {
    return this.http.put<Product>(this.ApiBaseUrl + '/api/products/'+ id,updateProductObj);
  }
 
  deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(this.ApiBaseUrl + '/api/products/'+ id);
  }

}
