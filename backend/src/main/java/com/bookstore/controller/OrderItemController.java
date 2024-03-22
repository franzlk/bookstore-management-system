package com.bookstore.controller;

import com.bookstore.model.OrderItem;
import com.bookstore.service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-items")
@CrossOrigin
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;

    @PostMapping("/add")
    public String addOrderItem(@RequestBody OrderItem orderItem) {
        orderItemService.saveOrderItem(orderItem);
        return "New order item added successfully";
    }

    @GetMapping("/getAll")
    public List<OrderItem> getAllOrderItems() {
        return orderItemService.getAllOrderItems();
    }
}
