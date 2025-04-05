import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  Adminlogin() {
    const admin = { email: this.email, password: this.password };
    console.log('Sending login request:', admin);
    
    this.adminService.login(admin).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
        // Optionally store a token or user data if your backend sends it
        // if (response.token) {
          // localStorage.setItem('authToken', response.token);
        // }
        // Store only user ID in local storage
        localStorage.setItem('adminId', response.admin.id);
        alert('Login Successful!');
        this.router.navigate(['admin/dashboard']);  // Navigates to dashboard on success
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Invalid credentials or server issue');
      }
    });

    console.log('Login request executed');
}
}
