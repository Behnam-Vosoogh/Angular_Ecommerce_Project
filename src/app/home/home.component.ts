import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { product } from '../data.type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | product[];
  trendyProducts: undefined | product[];

  constructor(private products: ProductService) {}
  ngOnInit(): void {
    this.products.popularProducts().subscribe((data) => {
      this.popularProducts = data;
    });
    this.products.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
  }
}
