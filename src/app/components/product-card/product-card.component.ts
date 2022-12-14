import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/assets/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() searchText: string | null = '';

  constructor() { }

  ngOnInit(): void {
  }

}
