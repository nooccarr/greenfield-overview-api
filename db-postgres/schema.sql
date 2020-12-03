-- SELECT 'CREATE DATABASE greenfield'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'greenfield')\gexec

\c greenfield;

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS related;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS skus;

CREATE TABLE products(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(30) NOT NULL,
  slogan VARCHAR(110) NOT NULL,
  description VARCHAR(470) NOT NULL,
  category VARCHAR(20) NOT NULL,
  default_price VARCHAR(25) NOT NULL
);

CREATE TABLE related(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  product_id INTEGER NOT NULL,
  related_product_id INTEGER NOT NULL REFERENCES products(id)
);

CREATE TABLE features(
  id SERIAL PRIMARY KEY NOT NULL UNIQUE,
  product_id INTEGER NOT NULL REFERENCES products(id),
  feature VARCHAR(30) NOT NULL,
  value VARCHAR(30) NOT NULL
);

CREATE TABLE styles(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  product_id INTEGER NOT NULL REFERENCES products(id),
  name VARCHAR(60) NOT NULL,
  sale_price VARCHAR(10) NULL,
  original_price VARCHAR(10) NOT NULL,
  "default?" INTEGER NOT NULL
);

CREATE TABLE photos(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  url VARCHAR(150) NOT NULL,
  thumbnail_url VARCHAR(150) NOT NULL
);

CREATE TABLE skus(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  size VARCHAR(10) NOT NULL,
  quantity INTEGER NOT NULL
);

\COPY products FROM '../database/cleanedSamples/productSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY related FROM '../database/cleanedSamples/relatedSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY features FROM '../database/cleanedSamples/featuresSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY styles FROM '../database/cleanedSamples/stylesSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY photos FROM '../database/cleanedSamples/photosSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
\COPY skus FROM '../database/cleanedSamples/skusSample.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM