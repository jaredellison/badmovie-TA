-- SET UP SCHEMA HERE

drop database if exists badmovies;
create database badmovies;
use badmovies;

create table if not exists favorites (
  db_id int auto_increment primary key,
  title VARCHAR(500),
  id VARCHAR(50),
  release_date VARCHAR(50),
  poster_path VARCHAR(300),
  backdrop_path VARCHAR(300),
  vote_average VARCHAR(10)
);


-- Query Sandbox:

-- insert into favorites
-- (title, id, release_date, poster_path, backdrop_path, vote_average)
-- values (
-- "Space thing",
-- "567553",
-- "2019-01-01",
-- "null",
-- "/yPt0lqZp93MeOEkml0mTZQnsqNs.jpg",
-- "0"
-- );

-- select * from favorites;

-- delete from favorites where id = "567553";

-- ["Potato Farm", "69696", "2019-01-01", "null", "/yPt0lqZp93MeOEkml0mTZQnsqNs.jpg", "0"]
