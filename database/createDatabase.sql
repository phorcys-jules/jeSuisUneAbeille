-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3308
-- Généré le : jeu. 27 jan. 2022 à 16:00
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : beehoneyst
--

-- --------------------------------------------------------

--
-- Structure de la table plantes
--

CREATE TABLE plantes (
  id int(11) NOT NULL,
  nom_latin varchar(50) DEFAULT NULL,
  nom_fr varchar(50) DEFAULT NULL,
  hauteur varchar(11) DEFAULT NULL,
  nectar int(11) DEFAULT NULL,
  pollen int(11) DEFAULT NULL,
  miellat tinyint(1) DEFAULT NULL,
  floraison varchar(100) DEFAULT NULL,
  couleur varchar(100) DEFAULT NULL,
  photo varchar(100) DEFAULT NULL,
  localisation varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table qr
--

CREATE TABLE qr (
  id int(11) NOT NULL,
  id_plante int(11) DEFAULT NULL,
  longitude decimal(8,6) DEFAULT NULL,
  latitude decimal(8,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table ruche
--

CREATE TABLE ruche (
  id int(11) NOT NULL,
  nom varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table utilisateur
--

CREATE TABLE utilisateur (
  id int(11) NOT NULL,
  mail varchar(500) DEFAULT NULL,
  nom varchar(50) DEFAULT NULL,
  mdp varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table plantes
--
ALTER TABLE plantes
  ADD PRIMARY KEY (id);

--
-- Index pour la table qr
--
ALTER TABLE qr
  ADD PRIMARY KEY (id),
  ADD KEY qr_ibfk_1 (id_plante);

--
-- Index pour la table ruche
--
ALTER TABLE ruche
  ADD PRIMARY KEY (id);

--
-- Index pour la table utilisateur
--
ALTER TABLE utilisateur
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table plantes
--
ALTER TABLE plantes
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table qr
--
ALTER TABLE qr
  ADD CONSTRAINT qr_ibfk_1 FOREIGN KEY (id_plante) REFERENCES plantes (id);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
