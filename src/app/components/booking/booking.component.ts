// booking.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Booking {
  id?: number;
  from_time: string;
  to_time: string;
  from_date: string;
  to_date: string;
  total_price: number;
  status: string;
  bike_id: number;
  user_id: number;
}

interface Bike {
  id: number;
  brand: string;
  model: string;
  hourlyRate: number;
}

@Component({
  selector: 'app-booking',
  imports:[CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking: Booking = {
    from_time: '',
    to_time: '',
    from_date: '',
    to_date: '',
    total_price: 0,
    status: 'Pending',
    bike_id: 0, // Will be set dynamically
    user_id: 0  // Will be set dynamically
  };

  bike!: Bike;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    console.log("User id is:", userId);

    // Get bike ID from route parameter
    this.route.queryParams.subscribe(params => {
      this.booking.bike_id = params['bikeId'];
      this.fetchBikeDetails();
    });
  }

  fetchBikeDetails(): void {
    this.http.get<Bike>(`http://localhost:8084/bikes/${this.booking.bike_id}`).subscribe({
      next: (data) =>{ this.bike = data;console.log("Data - ",this.bike);},
      error: (err) => console.error('Error fetching bike details:', err)
    });
  }

  calculatePrice(): void {
    const fromTime = new Date(`${this.booking.from_date}T${this.booking.from_time}`);
    const toTime = new Date(`${this.booking.to_date}T${this.booking.to_time}`);
    const hours = Math.abs(toTime.getTime() - fromTime.getTime()) / 36e5;
    this.booking.total_price = hours * this.bike.hourlyRate  ;
  }

  confirmBooking(): void {

    const userId = localStorage.getItem('userId');

    const bookingPayload = {
      fromDateTime: `${this.booking.from_date}T${this.booking.from_time}`,
      toDateTime: `${this.booking.to_date}T${this.booking.to_time}`,
      totalPrice: this.booking.total_price,
      status: this.booking.status,
      user: { id: userId },
      bike: { id: this.booking.bike_id }
    };

    this.http.post('http://localhost:8084/bookings/create', bookingPayload).subscribe({
      next: () => {
        alert('Booking Confirmed!');
        this.router.navigate(['user/my-bookings']);
      },
      error: (err) => console.error('Error creating booking:', err)
    });
  }
}


