-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 08 mars 2025 à 00:21
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion_appels`
--

-- --------------------------------------------------------

--
-- Structure de la table `appelants`
--

DROP TABLE IF EXISTS `appelants`;
CREATE TABLE IF NOT EXISTS `appelants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `numeroTelephone` varchar(255) DEFAULT NULL,
  `entreprise` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `appels`
--

DROP TABLE IF EXISTS `appels`;
CREATE TABLE IF NOT EXISTS `appels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `heure` time NOT NULL,
  `sujet` varchar(255) NOT NULL,
  `description` text,
  `idAppelant` int NOT NULL,
  `statut` varchar(255) DEFAULT 'en cours',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `appels`
--

INSERT INTO `appels` (`id`, `date`, `heure`, `sujet`, `description`, `idAppelant`, `statut`, `createdAt`, `updatedAt`) VALUES
(1, '2024-10-27 00:00:00', '10:00:00', 'Demande de modification de dossier', 'L\'employé demande à changer son adresse.', 1, 'en cours', '2025-03-07 20:39:17', '2025-03-07 20:39:17');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
