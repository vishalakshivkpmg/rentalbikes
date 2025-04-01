package com.example.rentalbikesbackend.repositories;

import com.example.rentalbikesbackend.entities.Booking;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalTime;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByUserId(Long userId);


    @Modifying
    @Transactional
    @Query("DELETE FROM Booking b WHERE b.user.id = :userId")
    int deleteByUserId(@Param("userId") Long userId);
}
