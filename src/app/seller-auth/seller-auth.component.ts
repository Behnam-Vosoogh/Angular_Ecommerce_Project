import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellService } from '../services/sell.service';
import { signUp } from '../data.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  constructor(private seller: SellService, private router: Router) {}
  signUp(data: signUp): void {
    console.warn('Form Data:', data);
    this.seller.userSignUp(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.router.navigate(['seller-home']);
      }
    });
  }
}
