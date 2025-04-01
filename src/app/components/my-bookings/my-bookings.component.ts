import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http'; 
 import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

 interface Booking {
  from_time: string;
  from_date: string;
  to_time: string;
  to_date: string;
  total_price: number;
  user_id: number;
  bike_id: number;
  status: string;
}

@Component({ 
  selector: 'app-my-bookings',
  imports:[CommonModule],
  templateUrl: './my-bookings.component.html' }) 
  
  export class MyBookingsComponent implements OnInit { 
    bookings: Booking[] = []; 
    userId: number = 0;

constructor(private http: HttpClient, private router: Router) {}

ngOnInit(): void { 
  this.userId = 12; 
  this.fetchBookings();
}

fetchBookings(): void { 
  this.http.get<Booking[]>(`http://localhost:8084/bookings/user/${this.userId}`).
  subscribe({ 
    next: (data) => this.bookings = data, 
  error: (err) => 
    console.error('Error fetching bookings:', err) });
 }
}