package com.example.rentalbikesbackend.controllers;

import com.example.rentalbikesbackend.entities.Bike;
import com.example.rentalbikesbackend.entities.BookingRequest;
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
    public List<Bike> getBikes(){
        return  bikeService.getAllBikes();
    }
    @PostMapping("/add")
    public Bike addBike(@RequestBody Bike bike){
        return bikeService.addBike(bike);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBike(@PathVariable Long id ){
        bikeService.deleteBike(id);
    }
    @PostMapping("/bookings/{bikeId}")
    public ResponseEntity<String> bookBike(@PathVariable Long bikeId,
                                           @RequestBody BookingRequest bookingRequest) {
        // Check if the bike is available for the requested time
        boolean isBooked = bookingService.bookBike(bikeId, bookingRequest);

        if (isBooked) {
            return ResponseEntity.ok("Bike booked successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bike is already booked or unavailable.");
        }
    }

}
