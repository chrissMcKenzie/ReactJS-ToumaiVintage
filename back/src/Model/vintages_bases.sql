-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 22 mars 2023 à 12:35
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `vintages_bases`
--

-- --------------------------------------------------------

--
-- Structure de la table `ordered`
--

CREATE TABLE `ordered` (
  `id` int(11) NOT NULL,
  `id_users` int(11) DEFAULT NULL,
  `id_products` int(11) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  `Quantite` int(10) NOT NULL,
  `Price` int(10) NOT NULL,
  `Date_Commande` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `Price` double NOT NULL,
  `imgSrc` varchar(512) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `Price`, `imgSrc`, `category`) VALUES
(1, 'Bureau 70', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 70, '../src/media/images/ordibureau4.jpg', 'Ordinateurs'),
(2, 'Bureau Labtopoda', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 50, '../src/media/images/ordibureau1.jpeg', 'Ordinateurs'),
(3, 'Labtop', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 70, '../src/media/images/ordibureau2.jpg', 'Ordinateurs'),
(4, 'Labtopoda', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 78, '../src/media/images/ordibureau3.jpg', 'Ordinateurs'),
(5, 'Bureau Labtop', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 70, '../src/media/images/ordibureau_apple.jpg', 'Ordinateurs'),
(6, 'Macintosh Apple', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 100, '../src/media/images/ordibureau_applemacintosh.jpeg', 'Ordinateurs'),
(7, 'Téléphone Fixe en BoisChaine hihi 400', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 50, '../src/media/images/iamges.jpeg', 'Téléphones'),
(8, 'Fixe retro', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 70, '../src/media/images/images1.jpeg', 'Téléphones'),
(9, 'Mural retro', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 65, '../src/media/images/mural.jpeg', 'Téléphones'),
(10, 'Fixe mobil', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 150, '../src/media/images/fixemobil.jpeg', 'Téléphones'),
(11, 'Noka 3310', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 40, '../src/media/images/nokia.jpeg', 'Téléphones'),
(12, 'Motorola Mobile 400', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 25, '../src/media/images/mobilem.jpeg', 'Téléphones'),
(13, 'Platine Divarette', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 120, '../src/media/images/divarette.jpeg', 'Sons et Accessoires'),
(14, 'Enceinte Fyne', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 50, '../src/media/images/FyneAudio.jpeg', 'Sons et Accessoires'),
(15, 'Gramophone', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 230, '../src/media/images/gramophone.jpeg', 'Sons et Accessoires'),
(16, 'Roadstar Hifi', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 300, '../src/media/images/Hifiroadstar.jpeg', 'Sons et Accessoires'),
(17, 'Tensai Hifi', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 90, '../src/media/images/HifiTensai.jpeg', 'Sons et Accessoires'),
(18, 'Ampli Hifi', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 90, '../src/media/images/Hifivintage.jpeg', 'Sons et Accessoires'),
(19, 'Procabasse Enceinte', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 100, '../src/media/images/Procabasse.jpeg', 'Sons et Accessoires'),
(20, 'Radio Dab', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 50, '../src/media/images/radioDAB.jpeg', 'Sons et Accessoires'),
(21, 'Atari 2600', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 90, '../src/media/images/atari2600.jpeg', 'jeux vidéo'),
(22, 'Game Boy', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 50, '../src/media/images/gameboy.jpeg', 'jeux vidéo'),
(23, 'Game Brique', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 70, '../src/media/images/gamebrique.jpeg', 'jeux vidéo'),
(24, 'Nintendo 64', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 80, '../src/media/images/nintendo.jpeg', 'jeux vidéo'),
(25, 'Playstation 1', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 100, '../src/media/images/plays.jpeg', 'jeux vidéo'),
(26, 'Sega Genesis', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 120, '../src/media/images/appareil-photo.jpg', 'jeux vidéo'),
(27, 'Vectrex VM', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 80, '../src/media/images/vectrexVM.jpeg', 'jeux vidéo'),
(28, 'Lumirex 1940', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 100, '../src/media/images/lumirex1940.jpeg', 'Appareils Photo'),
(29, 'Polaroid Autofocus 660', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 40, '../src/media/images/polaroid660.jpeg', 'Appareils Photo'),
(30, 'Fujifilm intax Mini 40', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 70, '../src/media/images/fujifilm.jpeg', 'Appareils Photo'),
(31, 'Camera vintage', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 150, '../src/media/images/cameravint.jpeg', 'Appareils Photo'),
(32, 'Nokia 5522', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 50, '../src/media/images/appareiletui.jpeg', 'Appareils Photo'),
(33, 'Olympus Pen', 'Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam', 90, '../src/media/images/pen.jpeg', 'Appareils Photo');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Sexe` varchar(50) NOT NULL,
  `Date_de_naissance` date NOT NULL,
  `Adresse` varchar(250) NOT NULL,
  `Pays` varchar(50) NOT NULL,
  `Ville` varchar(50) NOT NULL,
  `Departement` varchar(100) NOT NULL,
  `Code_postal` int(8) NOT NULL,
  `Telephone` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Mot_de_passe` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `Prenom`, `Nom`, `Sexe`, `Date_de_naissance`, `Adresse`, `Pays`, `Ville`, `Departement`, `Code_postal`, `Telephone`, `Email`, `Mot_de_passe`) VALUES
(2, 'Mous', 'SOW', 'HOMME', '1991-12-24', '15 Square Vaugirard', 'France', 'Paris', 'Paris 75', 75015, '6556688', 'mouss.rennes@gmail.com', 'azerty1'),
(3, 'Mckenzie', 'Jeaffy', 'HOMME', '1992-12-24', '15 Square Vaugirard', 'France', 'Paris', 'Paris 75', 75015, '6557788', 'jeaffy.rennes@gmail.com', 'azerty2'),
(5, 'Jeaffy', 'BAMBI', 'Homme', '1996-01-23', '7 Rue de la Réussite', 'France', 'Paris', 'Paris', 75007, '0612233445', 'Jeaffy.BambiMahicka@gmail.com', '@1234567@123'),
(6, 'Sidi', 'CISSE', 'Homme', '1990-12-23', '15 Square Vaugiraud', 'France', 'Paris', 'Paris', 75015, '06122398', 'scisse83@gmail.com', 'azerty'),
(10, 'Jeaffy', 'BAMBI', 'Homme', '1996-01-23', '7 Rue de la Réussite', 'France', 'Paris', 'Paris', 75007, '0612233445', 'Jeaffy.BambiMahicka@gmail.com', '@1234567@123'),
(11, 'Toto', 'MAKA', 'Homme', '1996-01-23', '7 Rue de la Réussite', 'France', 'Paris', 'Paris', 750007, '0612233445', 'Toto.MAKA@gmail.coml', '@1234567@123');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ordered`
--
ALTER TABLE `ordered`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_users` (`id_users`),
  ADD KEY `id_products` (`id_products`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ordered`
--
ALTER TABLE `ordered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ordered`
--
ALTER TABLE `ordered`
  ADD CONSTRAINT `ordered_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ordered_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
