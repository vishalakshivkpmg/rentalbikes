package com.example.rentalbikesbackend.services;

import com.example.rentalbikesbackend.entities.Bike;
import com.example.rentalbikesbackend.entities.Booking;
import com.example.rentalbikesbackend.entities.User;
import com.example.rentalbikesbackend.repositories.BikeRepository;
import com.example.rentalbikesbackend.repositories.BookingRepository;
import com.example.rentalbikesbackend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BikeRepository bikeRepository;

    public void createBooking(Booking booking){
        User user =
                userRepository.findById(booking.getUser().getId())
                        .orElseThrow(() -> new
                RuntimeException("User Not found"));
        Bike bike=
                bikeRepository.findById(booking.getBike().getId())
                        .orElseThrow(() -> new
                                RuntimeException("Bike Not Found"));

        booking.setUser(user);
        booking.setBike(bike);
        bookingRepository.save(booking);
    }

    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }


    public void deleteBookingsByUserId(Long userId) throws Exception {
        // Delete bookings for the given userId
        int deletedCount = bookingRepository.deleteByUserId(userId);

        // If no bookings were deleted, throw an exception
        if (deletedCount == 0) {
            throw new IllegalStateException("No bookings found for userId: " + userId);
        }
    }
}
