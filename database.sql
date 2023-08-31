-- Create a database if not exists
CREATE DATABASE IF NOT EXISTS user_form_data;
USE user_form_data;

-- Create a table to store the form data
CREATE TABLE IF NOT EXISTS user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    fullname VARCHAR(255),
    lastname VARCHAR(255),
    dob DATE,
    password VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    pincode VARCHAR(10)
);

-- Insert data from the form into the table
INSERT INTO user_data (name, fullname, lastname, dob, password, email, phone, address1, address2, city, country, pincode)
-- VALUES ('John', 'John Doe', 'Doe', '1990-01-15', 'hashed_password', 'john@example.com', '1234567890', '123 Main St', 'Apt 456', 'Cityville', 'Countryland', '12345');

-- Query to retrieve all user data
SELECT * FROM user_data;