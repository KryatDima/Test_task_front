import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { AppConfig } from '../config/config';
import { Observable } from 'rxjs';
import { ProductList } from '../models/product-list.model';
import { AddP } from '../models/add-p.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getById(id: number | string): Observable<Product> {
    return this.http.get<Product>("https://localhost:44395/api/product/" + id);
  }
  
  getList(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>("https://localhost:44395/api/product");
  }

  addProduct(product: AddP){
      return this.http.post("https://localhost:44395/api/product/add",{
            title: product.title,
            categoryId: product.categoryId
      })
  } 
}