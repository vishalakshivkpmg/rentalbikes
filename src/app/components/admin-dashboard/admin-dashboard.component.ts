import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../../service/bike.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

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
  selector: 'app-admin-dashboard',
  imports: [RouterModule, FormsModule, CommonModule, CarouselModule, AdminHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
    
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
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
        console.log("data ---- ",data);
        this.bikes = data;
        this.filteredBikes = data; // Initialize filteredBikes with all bikes
      },
      error: (err) => console.error('Error fetching bikes:', err)
    });
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

  }}
