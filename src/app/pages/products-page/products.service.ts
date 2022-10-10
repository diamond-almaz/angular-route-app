import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BackendService } from 'src/app/shared/backend.service';
import { IProduct } from 'src/assets/types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = new BehaviorSubject<IProduct[]>([]);

  searchText = new BehaviorSubject('');

  constructor(private backendService: BackendService) {
  
  }

  getProducts() {
    this.backendService.getProducts().subscribe((products) => {
      this.products.next(products);
    })
  }

  getProductsBySearch(searchText: string) {
    this.searchText.next(searchText);
    this.backendService.getProductsBySearch(searchText).subscribe((products) => {
      this.products.next(products);
    })
  }
}
