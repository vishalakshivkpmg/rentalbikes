package com.example.rentalbikesbackend.services;

import com.example.rentalbikesbackend.entities.Bike;
import com.example.rentalbikesbackend.entities.Booking;
import com.example.rentalbikesbackend.entities.User;
import com.example.rentalbikesbackend.repositories.BikeRepository;
import com.example.rentalbikesbackend.repositories.BookingRepository;
import com.example.rentalbikesbackend.repositories.UserRepository;
import com.example.rentalbikesbackend.entities.BookingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private UserRepository userRepository;

    public boolean bookBike(Long bikeId, BookingRequest bookingRequest) {
        // Fetch user and bike details (optional, depending on your logic)
        User user = userRepository.findById(bookingRequest.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        Bike bike = bikeRepository.findById(bikeId).orElseThrow(() ->
                new RuntimeException("Bike not found"));

        // Check if the bike is already booked for the given time
        if (bookingRepository.
                existsByBikeIdAndFromTimeLessThanAndToTimeGreaterThan(bikeId,
                        bookingRequest.getFromTime(), bookingRequest.getToTime())) {
            return false; // Bike is already booked during this time
        }

        // Create and save the booking
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setBike(bike);
        booking.setFromTime(bookingRequest.getFromTime());
        booking.setToTime(bookingRequest.getToTime());
        booking.setTotalPrice(bookingRequest.getTotalPrice());
        booking.setStatus("Booked");

        bookingRepository.save(booking);
        return true; // Successfully booked
    }
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }
}
