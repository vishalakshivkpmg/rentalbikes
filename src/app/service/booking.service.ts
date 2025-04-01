import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8084/bookings';  // Ensure this matches your backend API URL

  constructor(private http: HttpClient) { }

  // Create a booking
  createBooking(booking: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, booking);
  }

  

}
