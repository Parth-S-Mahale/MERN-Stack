CREATE TABLE products(
name 	VARCHAR(50),
price 	DECIMAL(6,2),
stock 	INT
);

-- DELETE FROM products

BEGIN;

INSERT INTO products(name, price, stock)
VALUES('Jacket', 3000.00, 5);

ALTER TABLE products RENAME TO inventory

UPDATE inventory SET stock = stock - 5 WHERE name = 'Jacket'

COMMIT

BEGIN;
SAVEPOINT savepoint1;
INSERT INTO products (name, price, stock)
VALUES('Jeans', 3000.00, 6)

ROLLBACK TO savepoint1 -- rollback to savepoint1 if needed

COMMIT

SELECT * FROM inventory



