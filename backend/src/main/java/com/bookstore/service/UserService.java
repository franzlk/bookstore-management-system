package com.bookstore.service;

import com.bookstore.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    boolean authenticate(String username, String password);
}
