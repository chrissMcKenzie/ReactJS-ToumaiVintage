SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Table Products
CREATE TABLE `products` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` varchar(50) NOT NULL,
    `description` varchar(255) NOT NULL,
    `price` double NOT NULL,
    `imgSrc` varchar(512) NOT NULL,
    `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table USERS
CREATE TABLE `users` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `Prenom` varchar(50) NOT NULL,
    `Nom` varchar(50) NOT NULL,
    `Sexe` varchar(50) NOT NULL,
    `Date_de_naissance` Date NOT NULL,
    `Adresse` varchar(250) NOT NULL,
    `Pays` varchar(50) NOT NULL,
    `Ville` varchar(50) NOT NULL,
    `Departement` varchar(100) NOT NULL,
    `Code_postal` INT(8) NOT NULL,
    `Telephone` varchar(20) NOT NULL,
    `Email` varchar(100) NOT NULL,
    `Mot_de_passe` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table Commande
CREATE TABLE `ordered`( `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    `id_users` INT, FOREIGN KEY (id_users) REFERENCES users(id),
    `id_products` INT, FOREIGN KEY (id_products) REFERENCES products(id),
    `Quantite` INT(10) NOT NULL,
    `Date_Commande` DATE 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `products` (`title`, `description`, `price`,`imgSrc`,`category`) VALUES
("Bureau 70","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",70,"../src/media/images/ordibureau4.jpg","Ordinateurs"),
("Bureau Labtopoda","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 50,"../src/media/images/ordibureau1.jpeg","Ordinateurs"),
("Labtop","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",70,"../src/media/images/ordibureau2.jpg","Ordinateurs"),
("Labtopoda","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",78,"../src/media/images/ordibureau3.jpg","Ordinateurs"),
("Bureau Labtop","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 70,"../src/media/images/ordibureau_apple.jpg","Ordinateurs"),
("Macintosh Apple","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",100,"../src/media/images/ordibureau_applemacintosh.jpeg","Ordinateurs"),
("Téléphone Fixe en BoisChaine hihi 400","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",50,"../src/media/images/iamges.jpeg","Téléphones"),
("Fixe retro","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",70,"../src/media/images/images1.jpeg","Téléphones"),
("Mural retro","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",65,"../src/media/images/mural.jpeg","Téléphones"),
("Fixe mobil","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",150,"../src/media/images/fixemobil.jpeg","Téléphones"),
("Noka 3310","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",40,"../src/media/images/nokia.jpeg","Téléphones"),
("Motorola Mobile 400","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",25,"../src/media/images/mobilem.jpeg","Téléphones"),
("Platine Divarette","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 120,"../src/media/images/divarette.jpeg","Sons et Accessoires"),
("Enceinte Fyne","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 50,"../src/media/images/FyneAudio.jpeg","Sons et Accessoires"),
("Gramophone","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",230,"../src/media/images/gramophone.jpeg","Sons et Accessoires"),
("Roadstar Hifi","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 300,"../src/media/images/Hifiroadstar.jpeg","Sons et Accessoires"),
("Tensai Hifi","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",90,"../src/media/images/HifiTensai.jpeg","Sons et Accessoires"),
("Ampli Hifi","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",90,"../src/media/images/Hifivintage.jpeg","Sons et Accessoires"),
("Procabasse Enceinte","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 100,"../src/media/images/Procabasse.jpeg","Sons et Accessoires"),
("Radio Dab","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",50,"../src/media/images/radioDAB.jpeg","Sons et Accessoires"),
("Atari 2600","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",90,"../src/media/images/atari2600.jpeg", "jeux vidéo"),
("Game Boy","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",50,"../src/media/images/gameboy.jpeg", "jeux vidéo"),
("Game Brique","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",70,"../src/media/images/gamebrique.jpeg", "jeux vidéo"),
("Nintendo 64","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",80,"../src/media/images/nintendo.jpeg", "jeux vidéo"),
("Playstation 1","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 100,"../src/media/images/plays.jpeg", "jeux vidéo"),
("Sega Genesis","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",120,"../src/media/images/appareil-photo.jpg", "jeux vidéo"),
("Vectrex VM","Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",80,"../src/media/images/vectrexVM.jpeg", "jeux vidéo"),
("Lumirex 1940", "Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 100, "../src/media/images/lumirex1940.jpeg", "Appareils Photo"),
("Polaroid Autofocus 660", "Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",40, "../src/media/images/polaroid660.jpeg", "Appareils Photo"),
("Fujifilm intax Mini 40", "Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware", 70, "../src/media/images/fujifilm.jpeg", "Appareils Photo"),
("Camera vintage", "Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",150, "../src/media/images/cameravint.jpeg", "Appareils Photo"),
("Nokia 5522", "Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",50, "../src/media/images/appareiletui.jpeg", "Appareils Photo"),
("Olympus Pen", "Thundercats iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa vaporware",90, "../src/media/images/pen.jpeg", "Appareils Photo");

INSERT INTO `users` (`Prénom`,`Nom`,`Sexe`,`Date de Naissance`,`Adresse`,`Pays`,`Ville`, `Département`,`Code Postal`,`Téléphone`,`Email`,`Mot de Passe`) VALUES
('Sidi','CISSE','HOMME',"1990-12-24",'15 Square Vaugirard', 'France','Paris','Paris 75','75015',06556677,'balla.rennes@gmail.com','azerty1'),
('Mous','SOW','HOMME',"1991-12-24",'15 Square Vaugirard', 'France','Paris','Paris 75','75015',06556688,'mouss.rennes@gmail.com','azerty1'),
('Mckenzie','Jeaffy','HOMME',"1992-12-24",'15 Square Vaugirard', 'France','Paris','Paris 75','75015',06557788,'jeaffy.rennes@gmail.com','azerty2');