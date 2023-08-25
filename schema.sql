-- Note: does not create database itself. Just tables 

CREATE TABLE Users (
    userID int NOT NULL AUTO_INCREMENT,
    username varchar(15) NOT NULL,
    firstName varchar(20) NOT NULL,
    lastName varchar(20) NOT NULL,
    PRIMARY KEY(userID)
);

CREATE TABLE Posts (
    userID int NOT NULL,
    postID int NOT NULL AUTO_INCREMENT,
    postText varchar(255),
    postTimestamp timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(postID),
    FOREIGN KEY(userID) REFERENCES Users(userID)
);

CREATE TABLE Followers (
    userID int,
    followerID int,
    PRIMARY KEY (userID, followerID),
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (followerID) REFERENCES Users(userID)
);