import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data.type';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css',
})
export class SellerAddProductComponent implements OnInit {
  addProductMassages: string | undefined;
  constructor(private product: ProductService) {}

  ngOnInit(): void {}
  submit(data: product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((data) => {
      console.warn(data);
      if (data) {
        this.addProductMassages = 'Product added successfull';
      }
    });
    setTimeout(() => {
      this.addProductMassages = undefined;
    }, 3000);
  }
}
