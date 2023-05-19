-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: forms
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci,
  `event_date` date DEFAULT NULL,
  `religious_ceremony_time` time DEFAULT NULL,
  `reception_time` time DEFAULT NULL,
  `religious_ceremony_address` text,
  `reception_address` text,
  `religious_ceremony_message` text,
  `reception_message` text,
  `main_photo` text,
  `gallery_photo_1` text,
  `gallery_photo_2` text,
  `gallery_photo_3` text,
  `gallery_photo_4` text,
  `gallery_photo_5` text,
  `gallery_photo_6` text,
  `video` text,
  `song` text,
  `whatsapp_phone` text,
  `attendee_name` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form`
--

LOCK TABLES `form` WRITE;
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
INSERT INTO `form` VALUES (1,'4','2023-05-18','12:03:00','02:59:00','.value','.value','.value','.value','src/assets/9931016423/main_photo_1684506537055-891471026.png','src/assets/9931016423/gallery_photo_1684506536973-613956187.png','src/assets/9931016423/gallery_photo_1684506536986-414752684.png','src/assets/9931016423/gallery_photo_1684506536987-700559171.png','src/assets/9931016423/gallery_photo_1684506536998-738982247.png','src/assets/9931016423/gallery_photo_1684506536999-775636290.png','src/assets/9931016423/gallery_photo_1684506537052-843894200.png','undefined','undefined','9931016423','0000'),(2,'2','2023-10-10','10:00:00','12:00:00','aqui','otra ','hola','hola hola','src/assets/9931019845/main_photo_1684515558272-718268217.png','src/assets/9931019845/gallery_photo_1684515558188-659360088.png','src/assets/9931019845/gallery_photo_1684515558193-210771898.png','src/assets/9931019845/gallery_photo_1684515558199-398995755.png','src/assets/9931019845/gallery_photo_1684515558207-359794266.png','src/assets/9931019845/gallery_photo_1684515558269-194132453.png','src/assets/9931019845/gallery_photo_1684515558270-18981744.png','src/assets/9931019845/video_1684515558276-86187797.mp4','src/assets/9931019845/song_1684515558390-991336150.mp3','9931019845','Otro festejado');
/*!40000 ALTER TABLE `form` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 17:54:21
