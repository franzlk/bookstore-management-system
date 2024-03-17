package com.bookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
        public static void main(String[] args) {
            // Perform any action here
            System.out.println("Application started and stopped successfully.");
            // Stop the application
            SpringApplication.exit(SpringApplication.run(Application.class, args));
    }
}
