CREATE TABLE Product(
    id serial,
    title character varying(1000) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    "km's run" real,
    lot integer,
    model character varying COLLATE pg_catalog."default",
    make character varying COLLATE pg_catalog."default",
    price real,
    category character varying COLLATE pg_catalog."default",
    condition character varying COLLATE pg_catalog."default",
    expiry date,
    views bigint DEFAULT 0,
    purchased_year date,
    featured boolean,
    verified boolean,
    status character varying COLLATE pg_catalog."default",
    CONSTRAINT id PRIMARY KEY (id)

)