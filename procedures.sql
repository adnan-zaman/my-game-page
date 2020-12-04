# These are the stored procedures that are saved
# on the MySQL instance


DELIMITER $$

CREATE PROCEDURE SetupTables()
BEGIN
	CREATE TABLE IF NOT EXISTS users(
		id INT PRIMARY KEY AUTO_INCREMENT,
		email VARCHAR(50) UNIQUE NOT NULL,
		password VARCHAR(50) UNIQUE NOT NULL
	);
END$$

CREATE PROCEDURE PopulateTestData()
BEGIN
	CALL SetupTables();
    INSERT INTO users(email, password)
	VALUES
		('test@abc.com', 'pass1'),
		('test2@abc.com', 'pass2'),
		('test3@abc.com', 'pass3');
END$$

CREATE PROCEDURE ClearTestData()
BEGIN
	DELETE FROM users
    WHERE id > 0;
END$$

DELIMITER ;


