package com.bookstore.controller;

import com.bookstore.model.Publisher;
import com.bookstore.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/publishers")
@CrossOrigin
public class PublisherController {

    @Autowired
    private PublisherService publisherService;

    @PostMapping("/add")
    public String addPublisher(@RequestBody Publisher publisher) {
        publisherService.savePublisher(publisher);
        return "New publisher added successfully";
    }

    @GetMapping("/getAll")
    public List<Publisher> getAllPublishers() {
        return publisherService.getAllPublishers();
    }
}
