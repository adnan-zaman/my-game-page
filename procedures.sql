# These are the stored procedures that are saved
# on the MySQL instance


DELIMITER $$

## Data retrival procedures

# Get a user
# @param 	userEmail 	users email
CREATE PROCEDURE GetUserByEmail(
	IN userEmail VARCHAR(50)
)
BEGIN
	SELECT * 
    FROM users
    WHERE email = userEmail;
END$$

CREATE PROCEDURE GetUserByDisplayName(
	IN userDisplayName VARCHAR(20)
)
BEGIN
	SELECT * 
    FROM users
    WHERE displayName = userDisplayName;
END$$

CREATE PROCEDURE GetUserById(
	IN userId INT
)
BEGIN
	SELECT *
    FROM users
    WHERE id = userId;
END$$

CREATE PROCEDURE GetGameById(
	IN gameId INT
)
BEGIN
	SELECT *
    FROM games
    WHERE id = gameId;
END$$

#Returns game information for a user's favorite games
#result set is in order from most favorite to least favorite
CREATE PROCEDURE GetUsersFavoriteGameInfo(
	IN userId INT
)
BEGIN
	SELECT 
		g.id, 
		g.`name`,
		g.coverurl
	FROM
		users u INNER JOIN
		favoriteGames f 
		ON u.id = f.uid INNER JOIN
		games g
		ON g.id = f.gid
	WHERE u.id = userId
	ORDER BY f.`rank` ASC;
END$$

# Search for a user by display name
# @param 	searchName	the search term 
# @param	offset		the number of results to skip
# @param	limit		how many results to show
# columns returned {id, displayName}
CREATE PROCEDURE SearchUser(
	IN searchName VARCHAR(50),
    IN `offset` INT,
    IN `limit` INT
)
BEGIN
	SELECT id, displayName, profilePic 
    FROM users
	WHERE displayName LIKE CONCAT('%', searchName, '%')
	ORDER BY displayName ASC
    LIMIT `offset`, `limit`;
END$$



## Data manipulation procedures

# Add a user to database
# @param	userEmail	new users email
# @param	userPass	new users password
CREATE PROCEDURE AddUser(
	IN userEmail VARCHAR(50),
    IN userPass VARCHAR(50),
    IN userDisplayName VARCHAR(20)
)
BEGIN
	INSERT INTO users(email, `password`, displayName, profilePic)
    VALUES(userEmail, userPass, userDisplayName, '/images/default-profile-pic.png');
END$$

CREATE PROCEDURE AddGame(
	IN gameId INT,
    IN gameName VARCHAR(50),
    IN gameCoverUrl VARCHAR(150)
)
BEGIN
	IF (gameCoverurl IS NULL) THEN		
		INSERT INTO games(id, `name`)
		VALUES(gameId, gameName);
	ELSE
		INSERT INTO games(id, `name`, coverurl)
		VALUES(gameId, gameName, gameCoverurl);
	END IF;
END$$

CREATE PROCEDURE AddFavoriteGame(
	IN userId INT,
    IN gameId INT,
    IN gameRank INT
)
BEGIN
	INSERT INTO favoriteGames(uid, gid, `rank`)
    VALUES(userId, gameId, gameRank);
END$$

CREATE PROCEDURE RemoveFavoriteGame(
	IN userId INT,
    IN gameId INT
)
BEGIN
	DELETE FROM favoriteGames
    WHERE (uid,gid) = (userId, gameId);
END$$

CREATE PROCEDURE ChangeFavoriteGameRank(
	IN userId INT,
    IN gameId INT,
    IN gameRank INT
)
BEGIN
	UPDATE favoritegames
	SET `rank` = gameRank
	WHERE (uid,gid) = (userId,gameId);
END$$


## Procedures related to tests

# Defines all tables in database
CREATE PROCEDURE SetupTables()
BEGIN
	CREATE TABLE IF NOT EXISTS users(
		id INT AUTO_INCREMENT,
		email VARCHAR(50) NOT NULL,
		`password` VARCHAR(50) NOT NULL,
        displayName VARCHAR(20) NOT NULL,
        profilePic VARCHAR(99) NOT NULL DEFAULT('/images/default-profile-pic.png'),
        
        CONSTRAINT PK_Users PRIMARY KEY(id),
        CONSTRAINT UQ_Users_Email UNIQUE(email),
        CONSTRAINT CK_Users_Password CHECK(CHAR_LENGTH(`password`) >= 8),
        CONSTRAINT UQ_Users_DisplayName UNIQUE(displayName)
	);
    
    CREATE TABLE IF NOT EXISTS games(
		id INT AUTO_INCREMENT,
		`name` VARCHAR(50) NOT NULL,
		coverurl VARCHAR(150) NOT NULL DEFAULT('/images/default-game.png'),
		
		CONSTRAINT PK_Games PRIMARY KEY(id)
	);


	CREATE TABLE IF NOT EXISTS favoriteGames(
		uid INT,
		gid INT,
		`rank` INT NOT NULL,
		
		CONSTRAINT PK_FavoriteGames PRIMARY KEY(uid, gid),
		CONSTRAINT FK_FavoriteGames_Uid FOREIGN KEY(uid)
			REFERENCES users(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
		CONSTRAINT FK_FavoriteGames_Gid FOREIGN KEY(gid)
			REFERENCES games(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
	);
END$$

# Fills database with test data
CREATE PROCEDURE PopulateTestData()
BEGIN
	CALL SetupTables();
    CALL ClearTestData();
    INSERT INTO users(id, email, `password`, displayName)
	VALUES
		(1, 'test@abc.com', 'password1', 'ProTester'),
		(2, 'test2@abc.com', 'password2', 'CoolTester'),
		(3, 'test3@abc.com', 'password3', 'WowTester');
        
    INSERT INTO games(id, `name`, coverurl)
	VALUES
		(1, 'Game1', 'https://gameimg/game1.jpg'),
        (2, 'Game2', 'https://gameimg/game2.jpg'),
        (3, 'Game3', 'https://gameimg/game3.jpg'),
        (4, 'Game4', 'https://gameimg/game4.jpg'),
        (5, 'Game5', 'https://gameimg/game5.jpg'),
        (989, 'Halo 3: ODST', '//images.igdb.com/igdb/image/upload/t_thumb/co1xhh.jpg'),
		(26845, 'Fire Emblem: Three Houses', '//images.igdb.com/igdb/image/upload/t_thumb/co1n8t.jpg'),
		(36550, 'Yakuza: Like a Dragon', '//images.igdb.com/igdb/image/upload/t_thumb/co2em9.jpg'),
		(26758, 'Super Mario Odyssey', '//images.igdb.com/igdb/image/upload/t_thumb/co1mxf.jpg'),
		(27959, 'Shin Megami Tensei: Strange Journey Redux', '//images.igdb.com/igdb/image/upload/t_thumb/co26i2.jpg'),
		(3225, "No Man's Sky", '//images.igdb.com/igdb/image/upload/t_thumb/co1k01.jpg');
        
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
    
    DELETE FROM games
    WHERE id > 0;
    
    #all FavoriteGames will be deleted due to referential integrity
END$$

DELIMITER ;


