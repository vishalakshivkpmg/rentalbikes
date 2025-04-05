import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  imports: [RouterLink],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('adminId'); // Remove userId from local storage
    localStorage.clear(); // Clear all local storage data if needed
    this.router.navigate(['/admin/login']); // Redirect to login page
  }

}
