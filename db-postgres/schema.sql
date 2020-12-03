-- SELECT 'CREATE DATABASE greenfield'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'greenfield')\gexec

\c greenfield;

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS related CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS skus CASCADE;

CREATE TABLE products(
  id integer PRIMARY KEY NOT NULL UNIQUE,
  name varchar(30) NOT NULL,
  slogan varchar(110) NOT NULL,
  description varchar(470) NOT NULL,
  category varchar(20) NOT NULL,
  default_price varchar(25) NOT NULL
);

CREATE TABLE related(
  id integer PRIMARY KEY NOT NULL UNIQUE,
  product_id integer NOT NULL,
  related_product_id integer NOT NULL REFERENCES products(id)
);

CREATE TABLE features(
  id integer PRIMARY KEY NOT NULL UNIQUE,
  product_id integer NOT NULL REFERENCES products(id),
  feature varchar(30) NOT NULL,
  value varchar(30) NOT NULL
);

CREATE TABLE styles(
  id integer PRIMARY KEY NOT NULL UNIQUE,
  product_id integer NOT NULL REFERENCES products(id),
  name varchar(60) NOT NULL,
  sale_price varchar(10) NULL,
  original_price varchar(10) NOT NULL,
  "default?" integer NOT NULL
);

CREATE TABLE photos(
  id integer PRIMARY KEY NOT NULL UNIQUE,
  style_id integer NOT NULL REFERENCES styles(id),
  url varchar(150) NOT NULL,
  thumbnail_url varchar(150) NOT NULL
);

CREATE TABLE skus(
  id integer PRIMARY KEY NOT NULL UNIQUE,
  style_id integer NOT NULL REFERENCES styles(id),
  size varchar(10) NOT NULL,
  quantity integer NOT NULL
);

\COPY products FROM '../database/cleanedSamples/productSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY related FROM '../database/cleanedSamples/relatedSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY features FROM '../database/cleanedSamples/featuresSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY styles FROM '../database/cleanedSamples/stylesSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY photos FROM '../database/cleanedSamples/photosSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY skus FROM '../database/cleanedSamples/skusSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM