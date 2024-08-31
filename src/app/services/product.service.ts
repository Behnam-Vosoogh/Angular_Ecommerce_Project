import { Injectable } from '@angular/core';
import { product } from '../data.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
    // console.warn('Service called');
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProduct(id: number) {
    console.warn(id);
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
}
