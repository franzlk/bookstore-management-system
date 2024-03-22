package com.bookstore.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Author")
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "author_id")
    private Long id;

    @Column(name = "author_name", nullable = false, length = 250)
    private String name;

    @Column(name = "biography", length = 1000)
    private String biography;

    // Define relationships with other entities if needed

    // Constructors, getters, and setters
}
