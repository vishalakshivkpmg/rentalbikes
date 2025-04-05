import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service'; // Service to get user info (for authentication)
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { HeaderComponent } from '../header/header.component';
import { BikeService } from '../../service/bike.service'; // Import the service

interface Bike {
  id: number;
  brand: string;
  model: string;
  transmission: string;
  hourly_rate: number;
  description: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, FormsModule, CommonModule, CarouselModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {
  bikes: Bike[] = [];
  filteredBikes: Bike[] = [];
  searchQuery: string = '';  

  constructor(
    private bikeService : BikeService ,
    private http: HttpClient, 
    private router: Router) {}

  ngOnInit(): void {
    this.fetchBikes();
  }

  fetchBikes(): void {
    this.bikeService.getAllBikes().subscribe({
      next: (data) => {
        this.bikes = data;
        this.filteredBikes = data; // Initialize filteredBikes with all bikes
      },
      error: (err) => console.error('Error fetching bikes:', err)
    });
  }

  bookBike(bikeId: number): void {
    this.router.navigate(['user/booking'], { queryParams: { bikeId } });
  }
  searchBikes() {
    const query = this.searchQuery.toLowerCase();
    this.filteredBikes = this.bikes.filter(bike =>
      bike.brand.toLowerCase().includes(query) ||
      bike.model.toLowerCase().includes(query) ||
      bike.transmission.toLowerCase().includes(query)
    );
    
    // Display all bikes if search query is empty
    if (!query) {
      this.filteredBikes = this.bikes;
    }
}

}