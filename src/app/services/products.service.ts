import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { AppConfig } from '../config/config';
import { Observable } from 'rxjs';
import { ProductList } from '../models/product-list.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getById(id: number | string): Observable<Product> {
    return this.http.get<Product>("https://localhost:44395/api/product/" + id);
  }
  
  getList(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>("https://localhost:44395/api/product");
  }

  addProduct(product: Product){
      return this.http.post(AppConfig.createProduct,{
            title: product.title,
            category: product.category
      })
  } 
}