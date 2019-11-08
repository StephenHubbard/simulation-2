CREATE TABLE houses (
    id serial primary key,
    name varchar(50),
    address varchar(100),
    city varchar(50),
    state varchar(50),
    zipcode varchar(50)
)

INSERT INTO houses (name, address, city, state, zipcode)
VALUES (
'house1', 
'98898 address st', 
'Sandy', 
'UT', 
'84092'
)

ALTER TABLE houses
ADD COLUMN rent VARCHAR(150);