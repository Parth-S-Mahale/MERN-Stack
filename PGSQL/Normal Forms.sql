CREATE TABLE orders(
order_id SERIAL PRIMARY KEY,
customer_name VARCHAR(50),
products VARCHAR(255),
quantities VARCHAR(100)
);

INSERT INTO orders(customer_name, products, quantities)
VALUES
('Alice', 'T-shirt, Jeans', '2 1')


CREATE TABLE order_details(
	order_id 		INT,
	product_id 		INT,
	customer_name 	VARCHAR(100), -- This depends only on order_id, not product_id
	product_name 	VARCHAR(100), -- This depends only on product_id, not order_id
	quantity 		INT,
	PRIMARY KEY 	(order_id, product_id)
);

CREATE TABLE order_details(
	order_id INT PRIMARY KEY,
	customer_name VARCHAR(100),
	customer_address VARCHAR(255), -- Transitive dependency (depends on customer_name, not on order_id)
	product_name VARCHAR(100),
	quantity INT,
	price DECIMAL(10, 2)
);






