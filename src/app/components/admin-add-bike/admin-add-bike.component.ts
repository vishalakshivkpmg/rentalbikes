import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../../service/bike.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-add-bike',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-add-bike.component.html',
  styleUrl: './admin-add-bike.component.css'
})
export class AdminAddBikeComponent {

  brand: string = '';
  model: string = '';
  description: string = '';
  hourlyRate: number = 0;
  transmission: string = '';
  status: string = '';
  selectedFile: File | null = null;

  constructor(private bikeService: BikeService, private router: Router) {}

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addBike() {
    if (!this.selectedFile) {
      alert('Please upload an image');
      return;
    }

    // Create FormData for backend upload
    const formData = new FormData();
    formData.append('image', this.selectedFile);
    console.log("image is ",this.selectedFile);
    // Call the image upload method in BikeService
    
    this.bikeService.uploadImage(formData).subscribe({
      next: (response) => {
        console.log(response); // Response from backend

        // Create bike data object
        const bikeData = {
          brand: this.brand,
          model: this.model,
          description: this.description,
          hourlyRate: this.hourlyRate,
          transmission: this.transmission,
          status: this.status,
          image: this.selectedFile?.name // Save only image name
        };

        // Call addBike method
        this.bikeService.addBike(bikeData).subscribe({
          next: () => {
            alert('Bike added successfully!');
            this.router.navigate(['/admin/dashboard']);
          },
          error: (err) => {
            console.error('Error adding bike:', err);
            alert('Failed to add bike');
          }
        });
      },
      error: (err) => {
        console.error('Error uploading image:', err);
        alert('Image upload failed');
      },
      
    });
  }
}