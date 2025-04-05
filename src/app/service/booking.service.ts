// booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Booking {
  id?: number;
  fromDateTime: string;
  toDateTime: string;
  totalPrice: number;
  status: string;
  bike: { id: number; brand: string; model: string; hourlyRate: number; }
};


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) {}

  // Fetch bike details by ID
  getUserBookings(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/bookings/user/${userId}`);
  }

  // Create a new booking
  createBooking(bookingPayload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings/create`, bookingPayload);
  }

  cancelBooking(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/bookings/cancel/${id}`, {});
  }

  getAllBookings() {
    return this.http.get<any[]>(`http://localhost:8080/bookings`);
  }
  
}
