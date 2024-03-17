package com.bookstore.dao;

import com.bookstore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDAO extends JpaRepository<Order, Long> {
    // Add custom query methods if needed
}
