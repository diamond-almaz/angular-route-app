import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';
import { IProduct } from 'src/assets/types';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products!: IProduct[];

  searchProducts = this.getProductsBySearch.bind(this);

  constructor(public productsServices: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.productsServices.products.subscribe((products) => {
      this.products = products;
    })

    const { search } = this.activatedRoute.snapshot.queryParams;
    if (search) {
      this.getProductsBySearch(search, false)
    } else {
      this.productsServices.getProducts();
    }
  }

  getProductsBySearch(searchText: string, isNavigate = true) {
    if (searchText) {
      if (isNavigate) {
        this.router.navigate(this.activatedRoute.snapshot.url, {
          queryParams: {
            search: searchText,
          }
        })
      }
    } else {
      this.router.navigate(this.activatedRoute.snapshot.url);
    }
    this.productsServices.getProductsBySearch(searchText)
  }
}
