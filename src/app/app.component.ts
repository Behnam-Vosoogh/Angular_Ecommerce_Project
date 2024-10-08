import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Remove HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fix typo: should be styleUrls with 's'
})
export class AppComponent {
  title = 'Angular_Ecommerce_Project';

  constructor(private http: HttpClient) {
    // Use HttpClient here
  }
}
