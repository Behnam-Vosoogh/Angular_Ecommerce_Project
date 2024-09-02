import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { signUp } from '../data.type';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  signUp(data: signUp) {}
}
