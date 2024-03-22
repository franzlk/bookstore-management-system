package com.bookstore.controller;

import com.bookstore.model.Review;
import com.bookstore.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/add")
    public String addReview(@RequestBody Review review) {
        reviewService.saveReview(review);
        return "New review added successfully";
    }

    @GetMapping("/getAll")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }
}
