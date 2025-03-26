import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private apiUrl = 'http://localhost:8084/bikes';

  constructor(private http: HttpClient) { }

  getBikes(): Observable<any>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
