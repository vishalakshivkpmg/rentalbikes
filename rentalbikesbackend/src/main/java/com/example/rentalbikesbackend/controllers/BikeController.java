package com.example.rentalbikesbackend.controllers;

import com.example.rentalbikesbackend.entities.Bike;
import com.example.rentalbikesbackend.services.BikeService;
import com.example.rentalbikesbackend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bikes")
public class BikeController {
    @Autowired
    private BikeService bikeService;
    @Autowired
    private BookingService bookingService;

    @GetMapping
    public List<Bike> getBikes() {
        return bikeService.getAllBikes();
    }

    @PostMapping("/add")
    public Bike addBike(@RequestBody Bike bike) {
        return bikeService.addBike(bike);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBike(@PathVariable Long id) {
        bikeService.deleteBike(id);
    }

    @PutMapping("/update/{id}")  // Use PUT for update
    public ResponseEntity<Bike> updateBike(@PathVariable Long id, @RequestBody Bike bikeDetails) {
        Bike updatedBike = bikeService.updateBike(id, bikeDetails);
        if (updatedBike != null) {
            return ResponseEntity.ok(updatedBike);
        }
        return ResponseEntity.notFound().build();  // Return 404 if bike not found
    }

}
