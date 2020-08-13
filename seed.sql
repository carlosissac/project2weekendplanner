INSERT INTO weekendPlanner.Users (UserName, userEmail, userNickname) 
VALUES ('Terri Janikowski', 'terri@example.com', 'terriJ');
INSERT INTO weekendPlanner.Users (UserName, userEmail, userNickname)
VALUES ('Issac Angulo', 'issac@issac.me', 'carlosissac');
INSERT INTO weekendPlanner.Users (UserName, userEmail, userNickname) 
VALUES ('Mo Abdi', 'mo@mo.me', 'moabdi');
INSERT INTO weekendPlanner.Users (UserName, userEmail, userNickname)
VALUES ('Karyn Clarke', 'karyn@karyn.me', 'karynclarke');

INSERT INTO weekendPlanner.Events (EventName, EventPlace, EventType, EventOrganizer, EventTimeStart, EventTimeEnd)
VALUES ('SummerParty', 'Food Truck Central', 'Food', 'TerriJ', '2020/08/10 13:00:00', '2020/08/10 14:00:00');
INSERT INTO weekendPlanner.Events (EventName, EventPlace, EventType, EventOrganizer, EventTimeStart, EventTimeEnd) 
VALUES ('Fatal State', 'Black Water', 'Music', 'Black and Green Collective', '2020/08/15 20:00:00', '2020/08/10 23:00:00');
INSERT INTO weekendPlanner.Events (EventName, EventPlace, EventType, EventOrganizer, EventTimeStart, EventTimeEnd)
VALUES ('2001 Space Odyssey', 'Hollywood Theater', 'Movies', 'Movie Madness', '2020/08/15 15:00:00', '2020/08/10 18:00:00');
INSERT INTO weekendPlanner.Events (EventName, EventPlace, EventType, EventOrganizer, EventTimeStart, EventTimeEnd)
VALUES ('Eels', 'Mississippi Studios', 'Music', 'Harry Thrasher Productions', '2020/08/17 20:00:00', '2020/08/17 23:00:00');

INSERT INTO weekendPlanner.Schedules (UserID, EventID, ScheduleNote)
VALUES (1, 4, 'bring earplugs');
INSERT INTO weekendPlanner.Schedules (UserID, EventID, ScheduleNote)
VALUES (2, 3, 'bring cash for merch');
INSERT INTO weekendPlanner.Schedules (UserID, EventID, ScheduleNote)
VALUES (3, 2, 'meet Karla at the bar 20 min before show starts');
INSERT INTO weekendPlanner.Schedules (UserID, EventID, ScheduleNote)
VALUES (4, 1, 'park on Market Street, get there 15 min early');