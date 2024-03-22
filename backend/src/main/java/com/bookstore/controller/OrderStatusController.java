package com.bookstore.controller;

import com.bookstore.model.OrderStatus;
import com.bookstore.service.OrderStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-status")
@CrossOrigin
public class OrderStatusController {

    @Autowired
    private OrderStatusService orderStatusService;

    @PostMapping("/add")
    public String addOrderStatus(@RequestBody OrderStatus orderStatus) {
        orderStatusService.saveOrderStatus(orderStatus);
        return "New order status added successfully";
    }

    @GetMapping("/getAll")
    public List<OrderStatus> getAllOrderStatuses() {
        return orderStatusService.getAllOrderStatuses();
    }
}
