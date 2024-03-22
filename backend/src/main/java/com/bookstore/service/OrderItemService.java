package com.bookstore.service;

import com.bookstore.model.OrderItem;

import java.util.List;

public interface OrderItemService {
    OrderItem saveOrderItem(OrderItem orderItem);

    List<OrderItem> getAllOrderItems();
}
