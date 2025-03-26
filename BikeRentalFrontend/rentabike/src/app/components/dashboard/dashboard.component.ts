import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service'; // Service to get user info (for authentication)
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: number=0;// Store user information
  bikes: any[] = [];  // Array to store bike details
   // Array to store the bikes that are already booked by the user

  constructor( // To fetch booking information
    private authService: AuthService,
    private http:HttpClient,
    private router:Router, // For user authentication data
  ) {}

  ngOnInit(): void {
    this.userId=this.authService.getUserId();
    this.loadBikes();  
    console.log(this.bikes); 
    
  }

  loadBikes(){
    this.http.get('http://localhost:8084/bikes').subscribe((
      response: any) => {
        this.bikes=response;
      }, error => {
        console.error('Error fetching bikes',error);
      });
  }

  bookBike(bikeId: number) {
    const bookingRequest = {
      bikeId: bikeId,
      userId: this.userId,
      fromTime: new Date(),
      toTime: new Date(new Date().getTime() + (2 * 60 * 60 * 1000)), // booking for 2 hours ahead
    };
  
    // Correct URL interpolation
    this.http.post('http://localhost:8084/bookings', bookingRequest)
      .subscribe(response => {
        alert('Booking Successful!');
        this.loadBikes();
      }, error => {
        alert('Booking Failed: ' + error.error);
      });
  }
  
  // Logout the user
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
