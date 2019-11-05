import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/models/product-list.model';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  top$: Observable<ProductList[]>;
  constructor(
    private service: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.top$ = this.service.getList();
  }

  gotoProduct(product: ProductList) {
    let productId = product ? product.id : null;
    this.router.navigate(['/product', { id: productId }])
  }
}
