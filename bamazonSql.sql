/*
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the database --
CREATE DATABASE bamazon_db;
*/

use bamazon_db;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
  item_id integer(11) auto_increment not null,
  product_name varchar(30),
  department_name varchar(30),
  price float(6,2),
  stock_quantity integer(30),
  primary key (item_id)
  );
  
  
  /*
  cd into folder and then,
  npm intall mysql
  npm install inquirer
  npm install request
  npm install fs
  */
  
  


Then create a Table inside of that database called products.
item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)