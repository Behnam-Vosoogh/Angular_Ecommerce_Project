import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  signUp(data: object): void {
    console.warn('Form Data:', data);
  }
}
