package com.example.rentalbikesbackend.services;

import com.example.rentalbikesbackend.entities.Bike;
import com.example.rentalbikesbackend.repositories.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BikeService {
    @Autowired
    private BikeRepository bikeRepository;

    public List<Bike> getAllBikes() {
        return bikeRepository.findAll();
    }

    public Bike addBike(Bike bike) {
        return bikeRepository.save(bike);
    }

    public void deleteBike(Long id) {
        bikeRepository.deleteById(id);
    }

    public Bike updateBike(Long id, Bike bikeDetails) {
        Optional<Bike> optionalBike = bikeRepository.findById(id);
        if (optionalBike.isPresent()) {
            Bike bikeToUpdate = optionalBike.get();
            bikeToUpdate.setBrand(bikeDetails.getBrand());
            bikeToUpdate.setModel(bikeDetails.getModel());
            bikeToUpdate.setHourlyRate(bikeDetails.getHourlyRate());
            bikeToUpdate.setTransmission(bikeDetails.getTransmission());
            bikeToUpdate.setStatus(bikeDetails.getStatus());
            bikeToUpdate.setDescription(bikeDetails.getDescription());
            bikeToUpdate.setImage(bikeDetails.getImage());

            return bikeRepository.save(bikeToUpdate);
        }
        return null;
    }

}

