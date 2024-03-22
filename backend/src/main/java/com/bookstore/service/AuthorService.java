package com.bookstore.service;

import com.bookstore.model.Author;

import java.util.List;

public interface AuthorService {
    Author saveAuthor(Author author);

    List<Author> getAllAuthors();
}
