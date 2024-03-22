package com.bookstore.service;

import com.bookstore.model.Genre;

import java.util.List;

public interface GenreService {
    Genre saveGenre(Genre genre);

    List<Genre> getAllGenres();
}
