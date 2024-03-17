package com.bookstore.dao;

import com.bookstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User, Long> {
    // Add custom query methods if needed
}
