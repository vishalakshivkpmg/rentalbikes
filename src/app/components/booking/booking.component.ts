import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  selector: 'app-booking',
  imports:[ReactiveFormsModule],
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  userId: number = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));

    this.bookingForm = this.fb.group({
      from_time: ['', Validators.required],
      to_time: ['', Validators.required],
      bike_id: [0, Validators.required],
      total_price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  submitBooking() {
    if (this.bookingForm.invalid) {
      alert('Please fill all details correctly.');
      return;
    }

    const bookingData: Booking = {
      ...this.bookingForm.value,
      user_id: this.userId,
      status: 'Pending',
    };

    this.http.post('http://localhost:8084/bookings/create', bookingData)
      .subscribe({
        next: () => {
          alert('Booking successful');
          this.router.navigate(['/my_bookings']);
        },
        error: (err) => {
          console.error(err);
          alert('Booking failed');
        }
      });
  }
}