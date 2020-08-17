INSERT INTO r45qlpnu7v0ujag6.Users (UserName, userEmail, userNickname) 
VALUES ('Terri Janikowski', 'terri@example.com', 'terriJ');
INSERT INTO r45qlpnu7v0ujag6.Users (UserName, userEmail, userNickname)
VALUES ('Issac Angulo', 'issac@issac.me', 'carlosissac');
INSERT INTO r45qlpnu7v0ujag6.Users (UserName, userEmail, userNickname) 
VALUES ('Mo Abdi', 'mo@mo.me', 'moabdi');
INSERT INTO r45qlpnu7v0ujag6.Users (UserName, userEmail, userNickname)
VALUES ('Karyn Clarke', 'karyn@karyn.me', 'karynclarke');

INSERT INTO r45qlpnu7v0ujag6.Events (EventCategory, EventName, EventDate, EventTimeStart, EventTimeEnd, EventPlace)
VALUES ('Livestreamed', 'Jim Brickman', 'Multiple dates between Aug 14 - Aug 21', '4:30 PM', '5:30 PM', 'Online');
INSERT INTO r45qlpnu7v0ujag6.Events (EventCategory, EventName, EventDate, EventTimeStart, EventTimeEnd, EventPlace) 
VALUES ('Resistance & Solidarity', 'Black Lives Matter Car Caravan', 'Wed & Fri', '', '9:30 PM', 'PCC Cascade Campus');
INSERT INTO r45qlpnu7v0ujag6.Events (EventCategory, EventName, EventDate, EventTimeStart, EventTimeEnd, EventPlace)
VALUES ('In-Person', 'The Hot Minute, The Bad Table', 'Fri, starting Fri Aug 14', '6:00 PM', '+30 min', 'Alotta Wood Fired Pizza');
INSERT INTO r45qlpnu7v0ujag6.Events (EventCategory, EventName, EventDate, EventTimeStart, EventTimeEnd, EventPlace)
VALUES ('Community', 'Beaverton Virtual Night Market 2020', 'Every day, from Aug 14 - Aug 15', '7:00 PM', '+2 Hours', 'Online');

INSERT INTO r45qlpnu7v0ujag6.Schedules (UserID, EventID, ScheduleNote)
VALUES (1, 4, 'bring earplugs');
INSERT INTO r45qlpnu7v0ujag6.Schedules (UserID, EventID, ScheduleNote)
VALUES (2, 3, 'bring cash for merch');
INSERT INTO r45qlpnu7v0ujag6.Schedules (UserID, EventID, ScheduleNote)
VALUES (3, 2, 'meet Karla at the bar 20 min before show starts');
INSERT INTO r45qlpnu7v0ujag6.Schedules (UserID, EventID, ScheduleNote)
VALUES (4, 1, 'park on Market Street, get there 15 min early');