import { Component, OnInit } from '@angular/core';
import { product } from '../data.type';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css',
})
export class SellerHomeComponent implements OnInit {
  productsList: undefined | product[];
  constructor(private products: ProductService) {}

  ngOnInit(): void {
    this.products.productList().subscribe((data) => {
      console.warn(data);
      if (data) {
        console.warn(data);
        this.productsList = data;
      }
    });
  }
}
