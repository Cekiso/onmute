CREATE TABLE player(
id serial not null primary key,
name text not null,
activities_id int,
challenge_id int,
points int,
foreign key (activities_id) references activities(id),
foreign key (challenge_id) references challenge (id)
);
CREATE TABLE challenge(
    id serial not null primary key,
    challenge_name text
);
CREATE TABLE activities(
    id serial not null primary key,
    activity_name text,
    level_id int,
    challenge_id int,
    foreign key (challenge_id) references  challenge(id)
    foreign key (level_id) references  levels(id)
);
CREATE TABLE levels(
id serial not null primary key,
level_name text
);