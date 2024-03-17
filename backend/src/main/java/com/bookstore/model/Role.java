package com.bookstore.model;

import javax.persistence.*;

@Entity
@Table(name = "Role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long id;

    @Column(name = "role_type", nullable = false, length = 50)
    private String roleType;

    // Constructors, getters, and setters
}
