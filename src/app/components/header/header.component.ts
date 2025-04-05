import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink , MatToolbarModule ,
    MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('userId'); // Remove userId from local storage
    localStorage.clear(); // Clear all local storage data if needed
    this.router.navigate(['/user/login']); // Redirect to login page
  }
}
