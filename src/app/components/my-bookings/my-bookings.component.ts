import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BookingService } from '../../service/booking.service';

interface Booking {
  id?: number;
  fromDateTime: string;
  toDateTime: string;
  totalPrice: number;
  status: string;
  bike: { id: number; brand: string; model: string; hourlyRate: number; };
}
@Component({
  selector: 'app-my-bookings',
  imports: [CommonModule , HeaderComponent],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent implements OnInit{
  userBookings: Booking[] = [];

  constructor(private bookingService: BookingService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.fetchUserBookings(Number(userId));
    }
  }

  fetchUserBookings(userId: number): void {
    this.bookingService.getUserBookings(userId).subscribe({
      next: (data) => { this.userBookings = data; console.log("User Bookings - ", this.userBookings); },
      error: (err) => console.error('Error fetching user bookings:', err)
    });

  }
  cancelBooking(bookingId: number): void {
    if (confirm("Are you sure you want to cancel this booking?")) {
      this.bookingService.cancelBooking(bookingId).subscribe({
        next: () => {
          // Refresh bookings after cancellation
          const userId = localStorage.getItem('userId');
          if (userId) {
            this.fetchUserBookings(Number(userId));
          }
        },
        error: (err) => console.error('Error cancelling booking:', err)
      });
    }
  }
  

}
