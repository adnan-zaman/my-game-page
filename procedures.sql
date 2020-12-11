# These are the stored procedures that are saved
# on the MySQL instance


DELIMITER $$

## Data retrival procedures

# Get a user
# @param 	userEmail 	users email
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
# @param	userEmail	new users email
# @param	userPass	new users password
CREATE PROCEDURE AddUser(
	IN userEmail VARCHAR(50),
    IN userPass VARCHAR(50)
)
BEGIN
	INSERT INTO users(email, `password`)
    VALUES(userEmail, userPass);
END$$


## Procedures related to tests

# Defines all tables in database
CREATE PROCEDURE SetupTables()
BEGIN
	CREATE TABLE IF NOT EXISTS users(
		id INT AUTO_INCREMENT,
		email VARCHAR(50) NOT NULL,
		`password` VARCHAR(50) NOT NULL,
        
        CONSTRAINT PK_Users PRIMARY KEY(id),
        CONSTRAINT UQ_Users_Email UNIQUE(email),
        CONSTRAINT CK_Users_Password CHECK(CHAR_LENGTH(`password`) >= 8)
	);
    
    CREATE TABLE IF NOT EXISTS games(
		id INT AUTO_INCREMENT,
		`name` VARCHAR(50) NOT NULL,
		imgurl VARCHAR(150) NOT NULL DEFAULT('https://imgs.default.jpg'),
		
		CONSTRAINT PK_Games PRIMARY KEY(id)
	);


	CREATE TABLE IF NOT EXISTS favoriteGames(
		uid INT,
		gid INT,
		`rank` INT NOT NULL,
		
		CONSTRAINT PK_FavoriteGames PRIMARY KEY(uid, gid),
		CONSTRAINT FK_FavoriteGames_Uid FOREIGN KEY(uid)
			REFERENCES users(id),
		CONSTRAINT FK_FavoriteGames_Gid FOREIGN KEY(gid)
			REFERENCES games(id)
	);
END$$

# Fills database with test data
CREATE PROCEDURE PopulateTestData()
BEGIN
	CALL SetupTables();
    CALL ClearTestData();
    INSERT INTO users(id, email, `password`)
	VALUES
		(1, 'test@abc.com', 'password1'),
		(2, 'test2@abc.com', 'password2'),
		(3, 'test3@abc.com', 'password3');
        
    INSERT INTO games(id, `name`, imgurl)
	VALUES
		(1, 'Game1', 'https://gameimg/game1.jpg'),
        (2, 'Game2', 'https://gameimg/game2.jpg'),
        (3, 'Game3', 'https://gameimg/game3.jpg'),
        (4, 'Game4', 'https://gameimg/game4.jpg'),
        (5, 'Game5', 'https://gameimg/game5.jpg');
        
	INSERT INTO favoriteGames(uid, gid, `rank`)
	VALUES
		(1, 4, 1),
        (1, 2, 2),
        (1, 1, 3),
        (1, 3, 4),
        (1, 5, 5);
END$$

# Clears all data from database
CREATE PROCEDURE ClearTestData()
BEGIN
	DELETE FROM users
    WHERE id > 0;
END$$

DELIMITER ;


