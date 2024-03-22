package com.bookstore.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    // Endpoint to get all users
    @GetMapping
    public String getAllUsers() {
        // Implement logic to fetch all users from the database
        return "Get all users";
    }

    // Endpoint to get a specific user by ID
    @GetMapping("/{id}")
    public String getUserById(@PathVariable Long id) {
        // Implement logic to fetch the user with the given ID from the database
        return "Get user with ID: " + id;
    }

    // Endpoint to register a new user
    @PostMapping("/register")
    public String registerUser(@RequestBody String userDetails) {
        // Implement logic to register a new user in the database
        return "Register new user: " + userDetails;
    }

    // Endpoint to update an existing user
    @PutMapping("/{id}")
    public String updateUser(@PathVariable Long id, @RequestBody String userDetails) {
        // Implement logic to update the user with the given ID in the database
        return "Update user with ID " + id + ": " + userDetails;
    }

    // Endpoint to delete an existing user
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        // Implement logic to delete the user with the given ID from the database
        return "Delete user with ID: " + id;
    }
}
