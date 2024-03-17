package com.bookstore.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private User customer;

    @Column(name = "rating", nullable = false)
    private int rating;

    @Column(name = "review_text", length = 200)
    private String reviewText;

    @Column(name = "date", nullable = false)
    private LocalDateTime date;

    // Constructors, getters, and setters
}
