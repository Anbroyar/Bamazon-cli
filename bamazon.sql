DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("iphone x", "cell phones", 1200, 10);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("samsung s8", "cell phones", 700, 8);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("canon", "cameras", 600, 5);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("nikon", "cameras", 1500, 3);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("lg", "tv", 600, 8);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("sony", "tv", 1000, 4);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("macbook", "computers", 1200, 6);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("hp", "computers", 700, 9);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("asus", "computers", 500, 5);
INSERT INTO products (product_name,department_name, price,stock_quantity)
VALUES ("dell", "computers", 600, 7);