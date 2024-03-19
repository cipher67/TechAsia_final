-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 08, 2023 at 09:03 AM
-- Server version: 8.0.32
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techasia13`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
);

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `phone`, `username`, `password`, `name`) VALUES
(19, 'admin@gmail.com', '1234567890', 'admin11', '$2a$10$jSIH/ZSN0PiljroRs62JYeGXWtGXz14NVDGa4eiEiqaqsEJwTERkO', 'ADMIN');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
CREATE TABLE IF NOT EXISTS `registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mac_id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_phone` (`phone`)
);

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `email`, `phone`, `password`, `mac_id`) VALUES
(10, 'Shubham Nakashe', 'shubh@gmail.com', '9892490770', '$2a$10$m7kmppMZ/a4Iwl3tGWSUD.nXluFY6hKK/JmqoFUN.CygIVrptE4J6', NULL),
(15, 'Harshita Dubey', 'harshita@gmail.com', '1234567890', '$2a$10$Q8Mz3W8dxIxnbiU2MjfFWejZp6AMsgseEFEfoDokRsVWm9FTaJYw2', NULL),
(16, 'Ajinkya', 'Ajinkya@gmail.com', '8585858588', '$2a$10$qm5hbh5DPxEzjlERj7Ue9OkpXgI6SbpUmUmfpCfAnXPHiUrZfKA4G', NULL),
(17, 'Ajinkya', 'ajinkya123@gmail.com', '8585858585', '$2a$10$REOPUFbzrqO8yYS0HGjDyeeg2ndH6TGoVAfIo254k/gTyRXRxcEuS', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

DROP TABLE IF EXISTS `statistics`;
CREATE TABLE IF NOT EXISTS `statistics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `on_off` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `count` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `session_time` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mac_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `time` time NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_mac_id_date` (`mac_id`,`date`),
  KEY `statistics_ibfk_1` (`phone1`),
  KEY `mac_id_index` (`mac_id`),
  KEY `date_index` (`date`)
);

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`id`, `phone1`, `on_off`, `count`, `session_time`, `mac_id`, `time`, `date`) VALUES
(106, '9892490770', '0', '2', '10', 'abc:def', '14:05:23', '2023-07-07'),
(109, '9892490770', '1', '7', '10', 'ghi:jkl', '14:07:58', '2023-07-07'),
(111, '9892490770', '1', '8', '10', 'ghi:jkl', '01:09:50', '2023-07-08');

-- --------------------------------------------------------

--
-- Table structure for table `statistics_graph`
--

DROP TABLE IF EXISTS `statistics_graph`;
CREATE TABLE IF NOT EXISTS `statistics_graph` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone1` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `on_off` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `count` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `session_time` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mac_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `phone1` (`phone1`)
);

--
-- Dumping data for table `statistics_graph`
--

INSERT INTO `statistics_graph` (`id`, `phone1`, `on_off`, `count`, `session_time`, `mac_id`, `time`, `date`) VALUES
(1, '9892490770', '1', '1', '10', 'abc:def', '14:04:11', '2023-07-07'),
(2, '9892490770', '1', '2', '10', 'abc:def', '14:04:32', '2023-07-07'),
(3, '9892490770', '0', '2', '10', 'abc:def', '14:05:23', '2023-07-07'),
(4, '9892490770', '0', '2', '10', 'ghi:jkl', '14:07:31', '2023-07-07'),
(5, '9892490770', '1', '7', '10', 'ghi:jkl', '14:07:58', '2023-07-07'),
(6, '9892490770', '1', '7', '10', 'ghi:jkl', '01:09:30', '2023-07-08'),
(7, '9892490770', '1', '8', '10', 'ghi:jkl', '01:09:50', '2023-07-08');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `statistics`
--
ALTER TABLE `statistics`
  ADD CONSTRAINT `statistics_ibfk_1` FOREIGN KEY (`phone1`) REFERENCES `registration` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `statistics_graph`
--
ALTER TABLE `statistics_graph`
  ADD CONSTRAINT `statistics_graph_ibfk_1` FOREIGN KEY (`phone1`) REFERENCES `registration` (`phone`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
