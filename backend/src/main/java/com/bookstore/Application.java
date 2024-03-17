package com.bookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
        public static void main(String[] args) {
            // Start and immediately stop the application to test build
            SpringApplication.exit(SpringApplication.run(Application.class, args));
    }
}
