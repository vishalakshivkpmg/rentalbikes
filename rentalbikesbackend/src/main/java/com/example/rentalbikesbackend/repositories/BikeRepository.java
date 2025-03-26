package com.example.rentalbikesbackend.repositories;

import com.example.rentalbikesbackend.entities.Bike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeRepository extends JpaRepository<Bike, Long> {
}
