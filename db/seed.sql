select * from User;
select * from Events;
select * from Schedule;

INSERT INTO User ( username, email, nickname, created) VALUES ('terri@example.com','terri@example.com','terri', '2020/08/10' );


INSERT INTO Events (eventID, eventName, place, type, organizerName, starttime, endtime) 
VALUES (1, 'Summer Party', 'Beaverton, OR', 'party', 'Terri', '2020/08/10 13:00:00', '2020/08/10 14:00:00');

INSERT INTO Schedule(username, eventID, userNote, created) VALUES ('terri@example.com', 1, 'testing', '2020/08/09 12:00:00');