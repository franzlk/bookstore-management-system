package com.bookstore.controller;

import com.bookstore.model.Genre;
import com.bookstore.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
@CrossOrigin
public class GenreController {

    @Autowired
    private GenreService genreService;

    @PostMapping("/add")
    public String addGenre(@RequestBody Genre genre) {
        genreService.saveGenre(genre);
        return "New genre added successfully";
    }

    @GetMapping("/getAll")
    public List<Genre> getAllGenres() {
        return genreService.getAllGenres();
    }
}
