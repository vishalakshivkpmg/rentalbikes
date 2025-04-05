import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Bike {
  id: number;
  brand: string;
  model: string;
  transmission: string;
  hourly_rate: number;
  description: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})

export class BikeService {

  

  private baseUrl = 'http://localhost:8084/bikes';

  constructor(private http: HttpClient) { }

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${this.baseUrl}`);
  }
  
  addBike(bikeData: any): Observable<any> {
    console.log("bike data : ", bikeData);
    return this.http.post(`${this.baseUrl}/add`, bikeData);
  }

  uploadImage(imageData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload-image`, imageData);
  }

}
