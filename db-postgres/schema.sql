-- SELECT 'CREATE DATABASE greenfield'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'greenfield')\gexec

\c greenfield;

DROP TABLE IF EXISTS related;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS skus;

-- CREATE TABLE related(
--   id INTEGER PRIMARY KEY NOT NULL UNIQUE,
--   current_product_id INTEGER NOT NULL,
--   related_product_id INTEGER NOT NULL REFERENCES products(id)
-- );

-- CREATE TABLE products(
--   id INTEGER PRIMARY KEY NOT NULL UNIQUE,
--   name VARCHAR(30) NOT NULL,
--   slogan VARCHAR(110) NOT NULL,
--   description VARCHAR(470) NOT NULL,
--   category VARCHAR(20) NOT NULL,
--   default_price VARCHAR(25) NOT NULL
-- );

-- CREATE TABLE features(
--   id SERIAL PRIMARY KEY NOT NULL UNIQUE,
--   productId INTEGER NOT NULL REFERENCES products(id),
--   feature VARCHAR(30) NOT NULL,
--   value VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE styles(
--   id INTEGER PRIMARY KEY NOT NULL UNIQUE,
--   productId INTEGER NOT NULL REFERENCES products(id),
--   name VARCHAR(60) NOT NULL,
--   sale_price VARCHAR(10) NULL,
--   original_price VARCHAR(10) NOT NULL,
--   default_style INTEGER NOT NULL
-- );

-- CREATE TABLE photos(
--   id INTEGER PRIMARY KEY NOT NULL UNIQUE,
--   styleId INTEGER NOT NULL, REFERENCES styles(id),
--   url VARCHAR(150) NOT NULL,
--   thumbnail_url VARCHAR(150) NOT NULL
-- );

-- CREATE TABLE skus(
--   id INTEGER PRIMARY KEY NOT NULL UNIQUE,
--   styleId INTEGER NOT NULL REFERENCES styles(id),
--   size VARCHAR(10) NOT NULL,
--   quantity INTEGER NOT NULL
-- );

-- \COPY related FROM '../database/cleanedDatabases/related.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
-- \COPY products FROM '../database/cleanedDatabases/product.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
-- \COPY features FROM '../database/cleanedDatabases/features.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
-- \COPY styles FROM '../database/cleanedDatabases/styles.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
-- \COPY photos FROM '../database/cleanedDatabases/photos.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM
-- \COPY skus FROM '../database/cleanedDatabases/skus.csv' DELIMITER ',' CSV HEADER; -- READY FOR TRANSFORM