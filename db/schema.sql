DROP DATABASE IF EXISTS weekendPlanner;

CREATE DATABASE weekendPlanner;

USE weekendPlanner;

CREATE TABLE User (
userID INT NOT NULL AUTO_INCREMENT,
username VARCHAR (30),
userEmail VARCHAR (30),
userNickname VARCHAR (30),
userCreated DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (userID)
);

CREATE TABLE Events (
eventID INT AUTO_INCREMENT NOT NULL,
eventName VARCHAR (254),
eventPlace VARCHAR (254),
eventType VARCHAR (30),
eventOrganizer VARCHAR (254),
eventTimeStart DATETIME,
eventTimeEnd DATETIME,
PRIMARY KEY (eventID)
);

CREATE TABLE Schedule (
scheduleID INT NOT NULL AUTO_INCREMENT,
userID INTEGER,
eventID INTEGER,
scheduleNote VARCHAR (254),
scheduleOutdated BOOLEAN DEFAULT false,
scheduleCreated DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (scheduleID)
);