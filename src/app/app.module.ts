import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsService } from './services/products.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CategoryService } from './services/categories.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    CategoryComponent,
    AddProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
