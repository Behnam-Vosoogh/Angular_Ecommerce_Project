import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';

  searchResult: undefined | product[];
  constructor(private router: Router, private products: ProductService) {}
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        console.log(event.url);
        if (
          localStorage.getItem('sellerToken') &&
          event.url.includes('/seller')
        ) {
          let sellerStore = localStorage.getItem('sellerToken');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
          // this.router.navigate(['/seller']);
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('sellerToken');
    this.router.navigate(['/']);
  }

  searchProduct(query: KeyboardEvent) {
    console.warn(query);
    if (query) {
      const element = query.target as HTMLInputElement;
      this.products.searchProduct(element.value).subscribe((result) => {
        console.warn(result);
        if (result.length > 5) {
          console.warn('more');
          result.length = 5;
        }
        console.warn(result.length);
        this.searchResult = result;
      });
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }
  redirectToDetails(id: number) {
    this.router.navigate(['/details/' + id]);
  }
  submitSearch(val: string) {
    console.warn(val);
    this.router.navigate([`search/${val}`]);
  }
  userLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/user-auth']);
    this.products.cartData.emit([]);
  }
}
