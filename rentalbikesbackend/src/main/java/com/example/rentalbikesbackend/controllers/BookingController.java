package com.example.rentalbikesbackend.controllers;// BookingController.java
import com.example.rentalbikesbackend.entities.Booking;
import com.example.rentalbikesbackend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bikes")
public class BookingController {

    @Autowired
    private BookingService bookingService; // A service class that handles business logic

    @PostMapping("/bookings")
    public Booking createBooking(@RequestBody Booking booking) {

        return bookingService.saveBooking(booking);
    }
    @GetMapping("/my-bookings")
    public List<Booking>
    getMyBookings(@RequestParam Long )
}
