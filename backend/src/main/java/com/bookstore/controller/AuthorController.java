package com.bookstore.controller;

import com.bookstore.model.Author;
import com.bookstore.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authors")
@CrossOrigin
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @PostMapping("/add")
    public String addAuthor(@RequestBody Author author) {
        authorService.saveAuthor(author);
        return "New author added successfully";
    }

    @GetMapping("/getAll")
    public List<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }
}
