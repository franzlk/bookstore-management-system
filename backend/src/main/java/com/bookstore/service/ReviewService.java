package com.bookstore.service;

import com.bookstore.model.Review;

import java.util.List;

public interface ReviewService {
    Review saveReview(Review review);

    List<Review> getAllReviews();
}
