-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2024 at 04:43 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `panelo`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `user_id`) VALUES
(21, 'Makanan', 18),
(22, 'Snack', 18);

-- --------------------------------------------------------

--
-- Table structure for table `preview`
--

CREATE TABLE `preview` (
  `id` int(11) NOT NULL,
  `term_id` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `preview`
--

INSERT INTO `preview` (`id`, `term_id`, `type`, `content`) VALUES
(45, 29, 'preview', '//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg'),
(47, 30, 'preview', '//portal.panelo.co/paneloresto/uploads/20/12/07122016073215155fcdc7ab18dd9.jpg'),
(49, 31, 'preview', '//portal.panelo.co/paneloresto/uploads/20/12/07122016073247255fcdd4354c14a.jpg'),
(53, 33, 'preview', '//portal.panelo.co/paneloresto/uploads/20/12/07122016073250025fcdd54a7e85b.jpg'),
(55, 34, 'preview', '//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `id` int(11) NOT NULL,
  `term_id` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`id`, `term_id`, `price`) VALUES
(1, 29, 15000),
(2, 30, 2000),
(3, 31, 2000),
(5, 33, 6000),
(6, 34, 12000);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `lang` varchar(3) NOT NULL,
  `auth_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `lang`, `auth_id`, `status`, `type`, `count`, `category_id`, `created_at`, `updated_at`) VALUES
(29, 'Nasi Goreng Pedas Sekali', 'nasi-goreng', 'en', 18, 1, 6, 0, 21, '2024-09-12 12:06:02', '2024-09-21 12:10:42'),
(30, 'Beng Beng', 'beng-beng', 'en', 18, 1, 6, 0, 22, '2024-09-20 12:10:06', '2024-09-21 12:10:42'),
(31, 'Tahu', 'tahu', 'en', 18, 1, 6, 0, 22, '2024-09-19 12:09:00', '2024-09-21 12:10:42'),
(33, 'Pop Mie kuah', 'pop-mie', 'en', 18, 1, 6, 0, 21, '2024-09-20 12:09:00', '2024-09-21 12:10:42'),
(34, 'nasi goreng', 'nasi-goreng', 'en', 18, 1, 6, 0, 21, '2024-09-30 12:06:02', '2024-09-21 12:10:42');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `term_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `term_id`, `stock`) VALUES
(1, 29, 1),
(2, 30, 10),
(3, 31, 20),
(5, 33, 1),
(6, 34, 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preview`
--
ALTER TABLE `preview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `preview`
--
ALTER TABLE `preview`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
