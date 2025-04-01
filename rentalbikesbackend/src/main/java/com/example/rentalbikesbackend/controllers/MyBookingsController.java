package com.example.rentalbikesbackend.controllers;

import com.example.rentalbikesbackend.entities.Booking;
import com.example.rentalbikesbackend.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class MyBookingsController {
    @Autowired
    private BookingRepository bookingRepository;
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getUserBookings(@PathVariable Long userId){
        try{
            List<Booking> bookings = bookingRepository.findByUserId(userId);
            if(bookings.isEmpty()){
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(bookings);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
