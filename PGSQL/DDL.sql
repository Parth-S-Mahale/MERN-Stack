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

DELETE FROM chai_store;

SELECT * FROM chai_store;

ALTER TABLE chai_store RENAME TO products

ALTER TABLE products ADD stock INT DEFAULT 0;

ALTER TABLE products ALTER COLUMN price TYPE DECIMAL(12, 2)

ALTER TABLE products DROP COLUMN category;

DROP TABLE products;

TRUNCATE TABLE products;

ALTER TABLE products RENAME TO inventory;

ALTER TABLE inventory RENAME COLUMN name TO product_name