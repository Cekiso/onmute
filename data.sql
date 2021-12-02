CREATE TABLE player(
id serial not null primary key,
player_name text not null,
game_level int,
points int,
challenge_id int,
foreign key (challenge_id) references challenge (id)
);

CREATE TABLE challenge(
    id serial not null primary key,
    challenge_name text
);