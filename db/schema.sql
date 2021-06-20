DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;


CREATE TABLE category(
  id INT AUTO_INCREMENT NOT NULL,
  category_name VARCHAR (30)NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE product(
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR (30)NOT NULL,
  price DECIMAL (6,2) NOT NULL,
  stock INT  NOT NULL DEFAULT 10,
  category_id INT, 
  FOREIGN KEY (category_id) REFERENCES category(id),
  PRIMARY KEY (id)
);

CREATE TABLE tag(
  id INT AUTO_INCREMENT NOT NULL,
  product_id INT, 
  FOREIGN KEY (product_id) REFERENCES product (id),
  tag_id INT,
  FOREIGN KEY (tag_id) REFERENCES tag (id),
  PRIMARY KEY (id)
);
 

CREATE TABLE product_tag(
  id INT AUTO_INCREMENT NOT NULL,
  product_id INT, 
  FOREIGN KEY (product_id) REFERENCES product (id),
  tag_id INT,
  FOREIGN KEY (tag_id) REFERENCES tag (id),
  PRIMARY KEY (id)
);

