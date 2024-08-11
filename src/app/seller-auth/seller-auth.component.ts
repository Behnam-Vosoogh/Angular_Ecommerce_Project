import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellService } from '../services/sell.service';
import { signUp } from '../data.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, NgIf], // Import FormsModule here
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  showLogin = false;
  constructor(private seller: SellService) {}
  ngOnInit() {
    this.seller.reloadSeller();
  }
  sellerLogin(data: signUp): void {
    console.warn('Form Data:', data);
  }
  signUp(data: signUp): void {
    console.warn('Form Data:', data);
    this.seller.userSignUp(data);
  }
  openLogin() {
    this.showLogin = !this.showLogin;
  }
}
