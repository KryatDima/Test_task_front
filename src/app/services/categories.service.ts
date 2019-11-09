import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryList } from '../models/category-list.model';
import { AppConfig } from '../config/config';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getList(): Observable<CategoryList[]> {
    return this.http.get<CategoryList[]>("https://localhost:44395/api/category");
  }
}