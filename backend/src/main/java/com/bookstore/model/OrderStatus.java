package com.bookstore.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Order_Status")
public class OrderStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_status_id")
    private Long id;

    @Column(name = "order_status", nullable = false, length = 20)
    private String orderStatus;

    // Constructors, getters, and setters
}
