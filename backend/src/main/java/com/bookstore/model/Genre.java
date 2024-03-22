package com.bookstore.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Genre")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "genre_id")
    private Long id;

    @Column(name = "genre_name", nullable = false, length = 20)
    private String name;

    // Constructors, getters, and setters
}
