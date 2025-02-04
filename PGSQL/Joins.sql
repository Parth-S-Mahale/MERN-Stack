CREATE TABLE customers(
customer_id INT PRIMARY KEY,
customer_name VARCHAR(100)
);

CREATE TABLE orders(
order_id INT PRIMARY KEY,
customer_id INT,
product_name VARCHAR(100),
quantity INT,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert data into customers table
INSERT INTO customers(customer_id, customer_name) 
VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'David'), -- David hasn't placed any orders
(5, 'Eve'); -- Eve hasn't placed any orders


-- Insert data into orders table
INSERT INTO orders(order_id, customer_id, product_name, quantity)
VALUES
(101, 1, 'T-shirt', 2), 	-- Alice's order
(102, 1, 'Jeans', 1), 		-- Alice's order  
(103, 2, 'Jeans', 1),		-- Bob's order
(104, NULL, 'Sneakers', 2); -- Order with no customer_id
-- (105, 6, 'Hat', 1); 		-- Order with invalid customer_id

SELECT * FROM customers
SELECT * FROM orders

SELECT c.customer_name, o.product_name, o.quantity 
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id

SELECT c.customer_name, o.product_name, o.quantity 
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id

SELECT c.customer_name, o.product_name, o.quantity 
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id

SELECT c.customer_name, o.product_name, o.quantity 
FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.customer_id

SELECT c.customer_name, o.product_name, o.quantity 
FROM customers c
CROSS JOIN orders o

-- Aggregate Function & Inner queries
SELECT customer_name
FROM customers
WHERE customer_id IN(  
	SELECT customer_id
	FROM orders
	WHERE product_name = 'T-shirt'
)


