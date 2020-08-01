DROP DATABASE IF EXISTS twoTable_db;
CREATE database twoTable_db;

USE twoTable_db;

CREATE TABLE topAlbum (
  albumPosition INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_one DECIMAL(10,4) NULL,
  raw_two DECIMAL(10,4) NULL,
  raw_three DECIMAL(10,4) NULL,
  raw_four DECIMAL(10,4) NULL,
  raw_five DECIMAL(10,4) NULL,
  PRIMARY KEY (albumPosition)
);

SELECT * FROM topAlbum;

CREATE TABLE topSongs (
  songsPosition INT NOT NULL,
  artist VARCHAR(100) NULL,
  songs VARCHAR(100) NULL,
  year INT NULL,
  raw_one DECIMAL(10,4) NULL,
  raw_two DECIMAL(10,4) NULL,
  raw_three DECIMAL(10,4) NULL,
  raw_four DECIMAL(10,4) NULL,
  raw_five DECIMAL(10,4) NULL,
  PRIMARY KEY (songsPosition)
);

USE twoTable_db;
SELECT * FROM topAlbum;
SELECT * FROM topSongs;


SELECT topAlbum.year, albumPosition, topAlbum.artist, songs, topAlbum.album
FROM topAlbum
INNER JOIN topSongs ON topAlbum.artist = topSongs.artist AND topAlbum.year = topSongs.year 
WHERE topAlbum.artist = 'Queen'
ORDER BY topAlbum.artist,topAlbum.year  ASC;