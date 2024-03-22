package com.bookstore.service;

import com.bookstore.model.Genre;
import com.bookstore.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreServiceImpl implements GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Override
    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }
}
