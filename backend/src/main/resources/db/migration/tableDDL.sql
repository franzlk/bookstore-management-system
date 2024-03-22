-- Drop tables in the reverse order of their creation

DROP TABLE IF EXISTS "inventory";
DROP TABLE IF EXISTS "review";
DROP TABLE IF EXISTS "order_status";
DROP TABLE IF EXISTS "order_item";
DROP TABLE IF EXISTS "book_order";
DROP TABLE IF EXISTS "author_book";
DROP TABLE IF EXISTS "book";
DROP TABLE IF EXISTS "genre";
DROP TABLE IF EXISTS "book_system_user";
DROP TABLE IF EXISTS "role";
DROP TABLE IF EXISTS "author";
DROP TABLE IF EXISTS "publisher";


CREATE TABLE Role (
    role_id SERIAL PRIMARY KEY,
    role_type VARCHAR(50) NOT NULL
);

CREATE TABLE book_system_user (
    user_id SERIAL PRIMARY KEY,
    role_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Role(role_id)
);

CREATE TABLE Author (
    author_id SERIAL PRIMARY KEY,
    author_name VARCHAR(250) NOT NULL,
    biography VARCHAR(1000)
);

CREATE TABLE Publisher (
    publisher_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL
);

CREATE TABLE Genre (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(20) NOT NULL
);

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    publisher_id INT NOT NULL,
    author_id INT NOT NULL,
    genre_id INT NOT NULL,
    ISBN VARCHAR(50) NOT NULL,
    FOREIGN KEY (publisher_id) REFERENCES Publisher(publisher_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id),
    FOREIGN KEY (genre_id) REFERENCES Genre(genre_id)
);

CREATE TABLE Author_Book (
    author_id INT NOT NULL,
    book_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Author(author_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    PRIMARY KEY (author_id, book_id)
);

CREATE TABLE Order_Status (
    order_status_id SERIAL PRIMARY KEY,
    order_status VARCHAR(20) NOT NULL
);

CREATE TABLE book_order (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_status_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES book_system_user(user_id),
    FOREIGN KEY (order_status_id) REFERENCES Order_Status(order_status_id)
);

CREATE TABLE Order_Item (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES book_order(order_id)
);

CREATE TABLE Review (
    review_id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    customer_id INT NOT NULL,
    rating INT NOT NULL,
    review_text VARCHAR(200),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (customer_id) REFERENCES book_system_user(user_id)
);

CREATE TABLE Inventory (
    inventory_id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (book_id) REFERENCES Book(book_id)
);
