import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signUp, login } from '../data.type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = '';
  constructor(private user: UserService) {}
  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: signUp) {
    this.user.userSignUp(data);
  }
  login(data: login) {
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) => {
      console.warn(result);
      if (result) {
        this.authError = 'User not found';
      } else {
      }
    });
  }
  openSignUp() {
    this.showLogin = false;
  }
  openLogin() {
    this.showLogin = true;
  }
}
