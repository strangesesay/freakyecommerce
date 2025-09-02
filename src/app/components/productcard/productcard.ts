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
  templateUrl: './productcard.html',
  styleUrl: './productcard.css'
})
export class Productcard {
  products: Product[];
  constructor(private productService: ProductsService) {

    this.products= this.productService.Products
  }

  protected readonly ProductsService = ProductsService;
}
