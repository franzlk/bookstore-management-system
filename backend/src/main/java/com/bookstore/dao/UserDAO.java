package com.bookstore.dao;

import com.bookstore.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserDAO {

    private final EntityManager entityManager;

    @Autowired
    public UserDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<User> getAllUsers() {
        // Implement logic to fetch all users from the database
        return null;
    }

    public User getUserById(int id) {
        // Implement logic to fetch a user by id from the database
        return null;
    }

    public void addUser(User user) {
        // Implement logic to add a user to the database
    }

    public void updateUser(User user) {
        // Implement logic to update a user in the database
    }

    public void deleteUser(int id) {
        // Implement logic to delete a user from the database
    }
}
