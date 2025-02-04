CREATE TABLE chai_store(                 
id 			SERIAL PRIMARY KEY,
chai_name 	VARCHAR(50),
price 		DECIMAL(5, 2),
chai_type 	VARCHAR(50),
available 	BOOLEAN
);

INSERT INTO chai_store(
chai_name, price, chai_type, available
) VALUES
('Masala Chai', 30.00, 'Spiced', TRUE),
('Green Chai', 25.00, 'Herbal', TRUE),
('Black Chai', 20.00, 'Classic', TRUE),
('Iced Chai', 35.00, 'Cold', FALSE),
('Oolang', 40.00, 'Speciality', TRUE);


ALTER TABLE chai_store RENAME TO products;

DELETE FROM products

ALTER TABLE products RENAME chai_name TO name

ALTER TABLE products ADD COLUMN stock INT

INSERT INTO products(name, price, stock)
VALUES('T-shirt', 900.00, 10)

ALTER TABLE products DROP chai_type

ALTER TABLE products DROP available

SELECT * FROM products

UPDATE products SET price = 700.00 WHERE name = 'T-shirt'

SELECT * FROM products

DELETE FROM products WHERE stock = 10 

SELECT * FROM products 

SELECT name AS "T name", price FROM products WHERE price > 200


GRANT SELECT ON products TO hitesh

GRANT INSERT, UPDATE ON products TO sales_team

REVOKE SELECT ON products FROM hitesh;
REVOKE INSERT, UPDATE ON products FROM sales_team





