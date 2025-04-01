package com.example.rentalbikesbackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "from_datetime")
    private LocalDateTime fromDateTime;

    @Column(name = "to_datetime")
    private LocalDateTime toDateTime;

    private double totalPrice;

    @Column(nullable = false)
    private String status = "pending";

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "bike_id")
    private Bike bike;
}
