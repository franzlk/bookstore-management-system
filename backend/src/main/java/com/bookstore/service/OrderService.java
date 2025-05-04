package com.bookstore.service;

import com.bookstore.model.Order;

import java.util.List;

public interface OrderService {
    Order saveOrder(Order order);

    List<Order> getAllOrders();

    List<Order> searchOrders(String keyword);

    boolean deleteOrder(Long id);
}
