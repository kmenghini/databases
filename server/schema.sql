CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user INT(10),
  message CHAR(150),
  room INT(10)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name CHAR(20)
);

CREATE TABLE users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name CHAR(20)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

