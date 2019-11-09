import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';




const routes: Routes = [
  {
    path: 'product',
    component: ProductsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/add',
    component: AddProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
