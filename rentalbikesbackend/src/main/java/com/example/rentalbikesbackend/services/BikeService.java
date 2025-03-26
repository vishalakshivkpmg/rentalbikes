package com.example.rentalbikesbackend.services;

import com.example.rentalbikesbackend.entities.Bike;
import com.example.rentalbikesbackend.repositories.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BikeService {
    @Autowired
    private BikeRepository bikeRepository;

    public List<Bike> getAllBikes(){
        return bikeRepository.findAll();
    }
    public Bike addBike(Bike bike){
        return bikeRepository.save(bike);
    }
    public void deleteBike(Long id){
        bikeRepository.deleteById(id);
    }
}
