import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin-orders',
  imports: [CommonModule, FormsModule , HeaderComponent],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent implements OnInit {
  allBookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fetchAllBookings();
  }

  fetchAllBookings(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        this.allBookings = data;
        console.log('All bookings:', this.allBookings);
      },
      error: (err) => {
        console.error('Error fetching bookings:', err);
      }
    });
  }

}
