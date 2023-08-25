-- Basic insert tests to confirm tables 

INSERT INTO Users
VALUES (NULL, 'test1', 'John', 'Smith');

INSERT INTO Posts (userID, postID, postText)
VALUES (1, NULL, 'test test');

INSERT INTO Followers
VALUES (1, 2);

SELECT * FROM Posts;
SELECT * FROM Users;
SELECT * FROM Followers;