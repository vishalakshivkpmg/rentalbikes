package com.example.rentalbikesbackend.controllers;// BookingController.java
import com.example.rentalbikesbackend.entities.Booking;
import com.example.rentalbikesbackend.entities.User;
import com.example.rentalbikesbackend.repositories.BookingRepository;
import com.example.rentalbikesbackend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/create")
    public ResponseEntity<String> createBooking(@RequestBody Booking booking) {
        bookingService.createBooking(booking);
        return ResponseEntity.ok("Booking created");
    }
    }