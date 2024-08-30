import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

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
  constructor(private router: Router) {}
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
}
