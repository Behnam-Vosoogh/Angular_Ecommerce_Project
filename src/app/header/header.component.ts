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
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        console.log(event.url);
        if (
          localStorage.getItem('sellerToken') &&
          event.url.includes('/seller')
        ) {
          this.menuType = 'seller';
          // this.router.navigate(['/seller']);
          console.warn('this is seller');
        } else {
          this.menuType = 'default';
          console.warn('outside to seller area');
        }
      }
    });
  }
}
