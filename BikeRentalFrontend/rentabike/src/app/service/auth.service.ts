import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8084/users';
  private loggedInUser: any = null;

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  login(user: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  setUser(user: any ){
    this.loggedInUser=user;
  }
  getUserId(): number{
    return this.loggedInUser ? this.loggedInUser.id: 0;
  }
  isLoggedIn(): boolean{
    return this.loggedInUser !== null;
  }
  logout(){
    this.loggedInUser=null;
  }
}
