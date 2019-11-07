import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from 'src/app/components/product/product.component';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';

const productRoutes: Routes = [
  {
    path: 'product/:id', 
    component: ProductComponent
  },
  {
    path: 'product',
    component: ProductsListComponent
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }