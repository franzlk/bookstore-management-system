-- Insert data into Publisher table
INSERT INTO Publisher (name, address) VALUES
('Publisher A', '123 Main St'),
('Publisher B', '456 Elm St'),
('Publisher C', '789 Oak St'),
('Publisher D', '101 Pine St'),
('Publisher E', '202 Maple St');

-- Insert data into Author table
INSERT INTO Author (author_name, biography) VALUES
('John Smith', 'John Smith is a prolific author with over 20 published books.'),
('Jane Doe', 'Jane Doe is an award-winning writer known for her mystery novels.'),
('Michael Johnson', 'Michael Johnson has written several bestselling thrillers.'),
('Emily Brown', 'Emily Brown is a debut author with her first novel gaining critical acclaim.'),
('David Wilson', 'David Wilson is a non-fiction writer specializing in history.');

-- Insert data into Role table
INSERT INTO Role (role_type) VALUES
('Admin'),
('Customer'),
('Editor'),
('Moderator'),
('Author');

-- Insert data into book_system_user table
INSERT INTO book_system_user (role_id, username, email, password_hash) VALUES
(2, 'user1', 'user1@example.com', 'b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e'), --password1
(2, 'user2', 'user2@example.com', '6cf615d5bcaac778352a8f1f3360d23f02f34ec182e259897fd6ce485d7870d4'), --password2
(2, 'user3', 'user3@example.com', '5906ac361a137e2d286465cd6588ebb5ac3f5ae955001100bc41577c3d751764'), --password3
(2, 'user4', 'user4@example.com', 'b97873a40f73abedd8d685a7cd5e5f85e4a9cfb83eac26886640a0813850122b'), --password4
(2, 'user5', 'user5@example.com', '8b2c86ea9cf2ea4eb517fd1e06b74f399e7fec0fef92e3b482a6cf2e2b092023'); --password5

-- Insert data into Genre table
INSERT INTO Genre (genre_name) VALUES
('Fiction'),
('Mystery'),
('Thriller'),
('Romance'),
('Science Fiction');

-- Insert data into Book table
INSERT INTO Book (publisher_id, author_id, genre_id, ISBN) VALUES
(1, 1, 1, '978-0-123456-00-1'),
(2, 2, 2, '978-0-123456-01-1'),
(3, 3, 3, '978-0-123456-02-1'),
(4, 4, 4, '978-0-123456-03-1'),
(5, 5, 5, '978-0-123456-04-1');

-- Insert data into Author_Book table
INSERT INTO Author_Book (author_id, book_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert data into Order_Status table
INSERT INTO Order_Status (order_status) VALUES
('Pending'),
('Processing'),
('Shipped'),
('Delivered'),
('Cancelled');

-- Insert data into book_order table
INSERT INTO book_order (customer_id, order_status_id, total_price) VALUES
(1, 1, 50.00),
(2, 2, 75.00),
(3, 3, 100.00),
(4, 4, 125.00),
(5, 5, 150.00);

-- Insert data into Order_Item table
INSERT INTO Order_Item (order_id, price, quantity) VALUES
(1, 25.00, 2),
(2, 15.00, 3),
(3, 20.00, 5),
(4, 25.00, 5),
(5, 30.00, 5);

-- Insert data into Review table
INSERT INTO Review (book_id, customer_id, rating, review_text) VALUES
(1, 1, 4, 'Great book, highly recommend it.'),
(2, 2, 5, 'Absolutely loved it! A must-read.'),
(3, 3, 3, 'Decent read, but not my favorite.'),
(4, 4, 4, 'Exciting thriller, couldn''t put it down.'),
(5, 5, 5, 'Amazing sci-fi novel!');

-- Insert data into Inventory table
INSERT INTO Inventory (book_id, quantity, price) VALUES
(1, 10, 20.00),
(2, 15, 10.00),
(3, 20, 15.00),
(4, 5, 30.00),
(5, 25, 12.00);
commit;