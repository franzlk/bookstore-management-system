package com.bookstore.model;

import javax.persistence.*;

@Entity
@Table(name = "\"User\"") // "User" is a reserved keyword in SQL, so we need to escape it with double quotes
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "email", nullable = false, length = 255)
    private String email;

    @Column(name = "password_hash", nullable = false, length = 60)
    private String passwordHash;

    // Constructors, getters, and setters
}
