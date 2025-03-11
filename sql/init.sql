CREATE DATABASE IF NOT EXISTS OSCGDB;

CREATE USER 'nithin'@'%' IDENTIFIED BY 'ItemRaj@1562'; 
GRANT ALL PRIVILEGES ON *.* TO 'nithin'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE OSCGDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    schedule_date DATE NOT NULL,
    schedule_description TEXT NOT NULL,
    schedule_header VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample data
INSERT INTO users (username, password) VALUES
('Teja', 'Test@0987'),
('Nithin', 'ItemRaj@1562'),
('Bhargava', 'Test@1234'),
('Rebecca Smith', 'Oscg@123$');

INSERT INTO schedules (schedule_date, schedule_description, schedule_header, user_id) VALUES
('2025-01-01', 'New Year\'s Celebration', 'Happy New Year', 1);
