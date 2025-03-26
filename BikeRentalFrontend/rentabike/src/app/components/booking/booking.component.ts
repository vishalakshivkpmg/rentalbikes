import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../service/booking.service'; // Service to handle booking requests
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [FormsModule,CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  fromTime: string;
  toTime: string;
  totalPrice: number;
  status: string;
  fromDate: string;
  toDate: string;

  constructor(private bookingService: BookingService, private router: Router) {}

  // Method to call the booking service and navigate after success
  onBookClick() {
    // Create a booking object with the class properties
    const booking = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      fromTime: this.fromTime,
      toTime: this.toTime,
      totalPrice: this.totalPrice,
      status: this.status

    };

    // Now, call the booking service with the newly created booking object
    this.bookingService.createBooking(booking).subscribe(
      (response) => {
        console.log('Booking created successfully!', response);
        // Navigate to confirmation page after successful booking
        this.router.navigate(['/confirmation']);
      },
      (error) => {
        console.error('Error during booking:', error);
      }
    );
  }
}
