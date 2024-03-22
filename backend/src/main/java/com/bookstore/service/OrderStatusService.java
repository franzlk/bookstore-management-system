package com.bookstore.service;

import com.bookstore.model.OrderStatus;

import java.util.List;

public interface OrderStatusService {
    OrderStatus saveOrderStatus(OrderStatus orderStatus);

    List<OrderStatus> getAllOrderStatuses();
}
