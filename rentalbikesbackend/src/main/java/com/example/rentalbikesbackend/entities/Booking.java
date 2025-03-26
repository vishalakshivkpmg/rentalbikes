package com.example.rentalbikesbackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity@Getter @Setter
@Table(name="booking")
public class Booking {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String fromTime;
    private String toTime;
    private double totalPrice;
    private String status="pending";

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name="bike_id")
    private Bike bike;
}
