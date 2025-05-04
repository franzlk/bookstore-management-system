package com.bookstore.service;

import com.bookstore.model.Order;
import com.bookstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> searchOrders(String keyword) {
        return orderRepository.findByCustomerUsernameContainingIgnoreCase(keyword);
    }

    @Override
    public boolean deleteOrder(Long id) {
        // Check if the order exists
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id); // Delete the order from the database
            return true;
        } else {
            return false; // Return false if the order does not exist
        }
    }

}
