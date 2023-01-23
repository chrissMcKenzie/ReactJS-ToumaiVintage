SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `produits` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` varchar(50) NOT NULL,
    `description` varchar(255) NOT NULL,
    `price` double NOT NULL,
    `imgSrc`:varchar(512) NOT NULL
    `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `produits` (`title`, `description`, `price`,`imgSrc`,`category`) VALUES
('Playstation 4','Famous video game platform',499,0),
('Barbie','Pink doll',29,null),
("Monopoly",'Board game $$$',59,1),
("Foorball ball",'A ball to play outside',25,2),
("Chess",'Board game for smart children',25,1)

CREATE TABLE `categories` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `categories` (`name`) VALUES
('Videogames'),
('Boardgames'),
('Outdoor')