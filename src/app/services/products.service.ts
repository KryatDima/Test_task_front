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
    return this.http.get<Product>(AppConfig.product + id);
  }
  
  getList(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(AppConfig.productList);
  }
}