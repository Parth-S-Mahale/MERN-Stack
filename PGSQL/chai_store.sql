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

DELETE FROM chai_store; -- Delete Each and Every Entry 'In One Go!'

SELECT * from chai_store; -- Select Each and Every Entry 'In One Go!'

SELECT chai_name AS "Chai Name", price AS "Cost in INR" FROM chai_store; -- Change chai_name AS 'Chai Name' and price as 'Cost in INR'

SELECT * FROM chai_store WHERE chai_name = 'Black Chai'; -- Selecting a 'Specific' Entry Starting as 'Black Chai'

SELECT * FROM chai_store WHERE chai_name LIKE '%Chai%'; -- Selecting a Entry Starting and Ending as 'Chai'

SELECT * FROM chai_store WHERE chai_name LIKE 'Iced%'; -- Selecting a 'Specific' Entry Starting as 'Iced' and Ending with anything!

SELECT * FROM chai_store WHERE price <= 30;

SELECT * FROM chai_store ORDER BY price DESC; -- Sorting From 'Higher' to 'Lower' price
SELECT * FROM chai_store ORDER BY price; -- Sorting From 'Lower' to 'Higher' price

UPDATE chai_store SET price = 38.00,available = TRUE WHERE chaI_name = 'Iced Chai' -- Update Table Entries Which are 'Specific', NOT ALL!

SELECT * from chai_store;

DELETE from chai_store WHERE chai_name = 'Black Chai'; -- Delete Table Entries Which are 'Specific', NOT ALL!

SELECT * from chai_store;












