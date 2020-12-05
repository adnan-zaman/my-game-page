# These are the stored procedures that are saved
# on the MySQL instance


DELIMITER $$

## Data retrival procedures

# Get a user
# @param 	userEmail 	user's email
CREATE PROCEDURE GetUser(
	IN userEmail VARCHAR(50)
)
BEGIN
	SELECT * 
    FROM users
    WHERE email = userEmail;
END$$


## Data manipulation procedures

# Add a user to database
# @param	userEmail	new user's email
# @param	userPass	new user's password
CREATE PROCEDURE AddUser(
	IN userEmail VARCHAR(50),
    IN userPass VARCHAR(50)
)
BEGIN
	INSERT INTO users(email, password)
    VALUES(userEmail, userPass);
END$$


## Procedures related to tests

# Defines all tables in database
CREATE PROCEDURE SetupTables()
BEGIN
	CREATE TABLE IF NOT EXISTS users(
		id INT PRIMARY KEY AUTO_INCREMENT,
		email VARCHAR(50) UNIQUE NOT NULL,
		password VARCHAR(50) UNIQUE NOT NULL
	);
END$$

# Fills test database with data
CREATE PROCEDURE PopulateTestData()
BEGIN
	CALL SetupTables();
    INSERT INTO users(email, password)
	VALUES
		('test@abc.com', 'pass1'),
		('test2@abc.com', 'pass2'),
		('test3@abc.com', 'pass3')
	ON DUPLICATE KEY UPDATE
		email = email;
END$$

# Clears all data from test database
CREATE PROCEDURE ClearTestData()
BEGIN
	DELETE FROM users
    WHERE id > 0;
END$$

DELIMITER ;


