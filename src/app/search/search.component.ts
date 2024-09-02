import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { product } from '../data.type';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchResult: undefined | product[];
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query &&
      this.product.searchProduct(query).subscribe((result) => {
        this.searchResult = result;
      });
  }
}
