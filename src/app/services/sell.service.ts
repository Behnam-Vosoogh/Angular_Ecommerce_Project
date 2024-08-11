import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data.type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SellService {
  isSellerLoggedIN = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userSignUp(data: signUp) {
    return this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('sellerToken', JSON.stringify(result.body));
          this.router.navigate(['/seller-home']);
        }
      });
  }
  reloadSeller() {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('sellerToken')
    ) {
      console.warn(localStorage.getItem('sellerToken'));
      this.isSellerLoggedIN.next(true);
      this.router.navigate(['/seller-home']);
    }
  }
  userLogin(data: login) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.passWord}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        console.warn('Result:', result);
        if (result && result.body && result.body.length > 0) {
          this.isLoginError.emit(false);
          localStorage.setItem('sellerToken', JSON.stringify(result.body));
          this.router.navigate(['/seller-home']);
        } else {
          console.warn('User not found');
          // alert('User not found');
          this.isLoginError.emit(true);
        }
      });
  }
}
