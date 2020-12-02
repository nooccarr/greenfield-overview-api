-- SELECT 'CREATE DATABASE greenfield'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'greenfield')\gexec

\c greenfield;

DROP TABLE IF EXISTS skus;

CREATE TABLE skus(
  id INTEGER PRIMARY KEY,
  styleId INTEGER, -- REFERENCES styles (id)
  size VARCHAR (10),
  quantity INTEGER
);

\copy skus FROM '../database/skus.csv' DELIMITER ',' CSV HEADER;