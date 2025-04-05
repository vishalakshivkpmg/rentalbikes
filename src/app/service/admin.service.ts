import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'http://localhost:8084/admin';

  login(admin: any): Observable<any>{
      return this.http.post(`${this.apiUrl}/login`, admin);
    }
}
