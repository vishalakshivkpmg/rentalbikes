import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports:[FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected here
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    console.log('Sending login request:', user);
    
    this.authService.login(user).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
        // Optionally store a token or user data if your backend sends it
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
        alert('Login Successful!');
        this.router.navigate(['/dashboard']);  // Navigates to dashboard on success
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Invalid credentials or server issue');
      }
    });

    console.log('Login request executed');
}

  onRegister() {
    console.log('Register button clicked');
    this.router.navigate(['/register']);
  }
}
