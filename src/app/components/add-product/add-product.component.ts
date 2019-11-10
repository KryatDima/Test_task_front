import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryList } from 'src/app/models/category-list.model';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formData$: Observable<CategoryList[]>;
  addForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private productsService: ProductsService,
        private categoryService: CategoryService) { }

  ngOnInit() {
    this.formData$ = this.categoryService.getList();
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      categoryId: ['',Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  
  get f() { return this.addForm.controls; }

  onSubmit(){
    this.submitted = true;

    
    if(this.addForm.invalid) {
      return;
    }

    this.loading = true;
    this.productsService.addProduct(this.addForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/product']);
        },
        error => {
          this.loading = false;
        });
        
      
  }
}
