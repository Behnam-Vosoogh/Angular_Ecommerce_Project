import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data.type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class SellService {
  isSellerLoggedIN = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userSignUp(data: signUp) {
    return this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.warn('Result:', result);
        if (result) {
          localStorage.setItem('sellerToken', JSON.stringify(result.body));
          this.router.navigate(['/seller-home']);
        }
      });
  }
  reloadSeller() {
    if (localStorage.getItem('sellerToken')) {
      this.isSellerLoggedIN.next(true);
      this.router.navigate(['/seller-home']);
    }
  }
}
