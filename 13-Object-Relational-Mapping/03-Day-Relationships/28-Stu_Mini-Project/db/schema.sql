DROP DATABASE IF EXISTS traveller_db;
CREATE DATABASE traveller_db;

USE traveller_db

CREATE TABLE IF NOT EXISTS traveller
id INT NOT NULL auto_increment,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
PRIMARY KEY (id)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS location
id INT NOT NULL auto_increment,
location_name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
PRIMARY KEY (id)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS trip
id INT NOT NULL auto_increment,
trip_budget DECIMAL(10,2),
traveller_amount INT DEFAULT 1,
travelier_id INT,
location_id INT,
PRIMARY KEY (id),
FOREIGN KEY (traveller id) REFERENCES traveller (id)
ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (location_id) REFERENCES location (id)
ON DELETE CASCADE ON UPDATE CASCADE) ENGINE = InnoDB;




