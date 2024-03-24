package com.bookstore.model;

import jakarta.persistence.*;

import java.security.NoSuchAlgorithmException;

@Entity
@Table(name = "book_system_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    public User() {
    }

    public User(Role role, String username, String email, String plaintextPassword) throws NoSuchAlgorithmException {
        this.role = role;
        this.username = username;
        this.email = email;
        this.passwordHash = CryptoHash.toHexString(CryptoHash.getSHA(plaintextPassword));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public void setPassword(String plaintextPassword) throws NoSuchAlgorithmException {
        this.passwordHash = CryptoHash.toHexString(CryptoHash.getSHA(plaintextPassword));
    }
}
