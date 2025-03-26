import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../../service/bike.service';// Service to fetch bikes

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  bikes: any[] = [];  // Array to store the list of bikes

  constructor(private bikeService: BikeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBikes();  // Fetch bikes when the component initializes
  }

  // Fetch bikes from the backend
  fetchBikes(): void {
    this.bikeService.getBikes().subscribe((data) => {
      this.bikes = data;
    });
  }

  // Redirect to booking page with the selected bike details
  goToBookingPage(bike: any): void {
    this.router.navigate(['/booking'], { queryParams: { bikeId: bike.id } });
  }
}
