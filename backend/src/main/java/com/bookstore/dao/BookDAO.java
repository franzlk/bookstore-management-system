package com.bookstore.dao;

import com.bookstore.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class BookDAO {

    private final EntityManager entityManager;

    @Autowired
    public BookDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Book> getAllBooks() {
        // Implement logic to fetch all books from the database
        return null;
    }

    public Book getBookById(int id) {
        // Implement logic to fetch a book by id from the database
        return null;
    }

    public void addBook(Book book) {
        // Implement logic to add a book to the database
    }

    public void updateBook(Book book) {
        // Implement logic to update a book in the database
    }

    public void deleteBook(int id) {
        // Implement logic to delete a book from the database
    }
}
