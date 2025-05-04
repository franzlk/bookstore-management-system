package com.bookstore.repository;

import com.bookstore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // Find orders by the customer's username containing the keyword, case-insensitive
    List<Order> findByCustomerUsernameContainingIgnoreCase(String keyword);

    void deleteById(Long id);
}

