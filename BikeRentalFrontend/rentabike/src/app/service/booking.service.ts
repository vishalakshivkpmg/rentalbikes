import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:8084/bikes/booking'; // API URL for creating a booking

  constructor(private http: HttpClient) {}

  createBooking(bookingRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingRequest);
  }
}
