package com.example.rentalbikesbackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity@Getter@Setter
@Table(name="bike")

public class Bike {

    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private double hourlyRate;
    private String transmission;
    private String status;
    private String description;

}
