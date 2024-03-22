package com.bookstore.service;

import com.bookstore.model.Publisher;

import java.util.List;

public interface PublisherService {
    Publisher savePublisher(Publisher publisher);

    List<Publisher> getAllPublishers();
}
