import { Component } from '@angular/core';
import {ProductsService} from '../../services/product';
import {Product} from '../../models/product.model';
import {CommonModule} from '@angular/common';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-productcard',
  imports: [
    CommonModule, NgFor
  ],
  providers:[ProductsService],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css'
})
export class Productcard {
  products: Product[];
  constructor(private productService: ProductsService) {

    this.products= this.productService.Products
  }

buyProduct(product: any) {

  // Example: show alert
  alert(`Tenki For Buy : ${product.title} from FREAKY STORE`);
}

}
