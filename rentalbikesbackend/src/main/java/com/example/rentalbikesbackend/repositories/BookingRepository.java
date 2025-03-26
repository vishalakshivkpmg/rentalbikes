package com.example.rentalbikesbackend.repositories;

import com.example.rentalbikesbackend.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Custom query to check if the bike is already booked during the given time period
    boolean existsByBikeIdAndFromTimeLessThanAndToTimeGreaterThan(Long bikeId, String fromTime, String toTime);
}
