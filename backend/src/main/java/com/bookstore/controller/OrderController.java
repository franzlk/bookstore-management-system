package com.bookstore.controller;

import com.bookstore.model.Order;
import com.bookstore.model.OrderStatus;
import com.bookstore.model.User;
import com.bookstore.repository.UserRepository;
import com.bookstore.repository.OrderStatusRepository;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bookstore.dto.OrderRequestDTO;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderStatusRepository orderStatusRepository;


    @PostMapping("/add")
    public ResponseEntity<String> addOrder(@RequestBody OrderRequestDTO orderRequest) {
        try {
            User customer = userRepository.findById(orderRequest.getCustomerId())
                    .orElseThrow(() -> new RuntimeException("Customer not found"));

            OrderStatus status = orderStatusRepository.findById(orderRequest.getOrderStatusId())
                    .orElseThrow(() -> new RuntimeException("Order status not found"));

            Order order = new Order();
            order.setCustomer(customer);
            order.setOrderStatus(status);
            order.setTotalPrice(orderRequest.getTotalPrice());
            order.setOrderDate(new Timestamp(System.currentTimeMillis()));

            orderService.saveOrder(order);
            return ResponseEntity.ok("New order added successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to add order: " + e.getMessage());
        }
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<Order>> getAllOrders() {
        try {
            List<Order> orders = orderService.getAllOrders();
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<Order>> searchOrders(@RequestParam String keyword) {
        try {
            List<Order> orders = orderService.searchOrders(keyword);
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id) {
        try {
            boolean isDeleted = orderService.deleteOrder(id);
            if (isDeleted) {
                return ResponseEntity.ok("Order deleted successfully.");
            } else {
                return ResponseEntity.status(404).body("Order not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to delete order: " + e.getMessage());
        }
    }
}
