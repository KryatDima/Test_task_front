import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/categories.service';
import { CategoryList } from 'src/app/models/category-list.model';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  formData$: Observable<CategoryList[]>;

  constructor(
    private formBuiler: FormBuilder,
    private router: Router,
    private service: CategoryService) { }

  ngOnInit() {
    this.formData$ = this.service.getList();

  }

}
