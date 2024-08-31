import { Component, OnInit } from '@angular/core';
import { product } from '../data.type';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  standalone: true,
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css',
})
export class SellerHomeComponent implements OnInit {
  productsList: undefined | product[];
  productMessage: undefined | string;
  icon = faTrash;
  // faCoffee = faCoffee;

  constructor(private products: ProductService) {}

  ngOnInit(): void {
    this.list();
  }
  deleteProduct(id: number) {
    console.warn('0', id);
    this.products.deleteProduct(id).subscribe((result) => {
      console.warn('1', id);
      if (result) {
        console.warn(id);
        this.productMessage = 'Product is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
  list() {
    this.products.productList().subscribe((result) => {
      if (result) {
        this.productsList = result;
      }
    });
  }
}
