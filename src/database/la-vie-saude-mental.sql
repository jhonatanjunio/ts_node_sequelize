-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: la-vie-saude-mental
-- ------------------------------------------------------
-- Server version	8.0.28

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

CREATE DATABASE la_vie_saude_mental;
USE la_vie_saude_mental;

--
-- Table structure for table `atendimentos`
--

DROP TABLE IF EXISTS `atendimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atendimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_atendimento` date DEFAULT NULL,
  `observacao` varchar(255) DEFAULT NULL,
  `psicologos_id` int NOT NULL,
  `pacientes_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_atendimentos_pacientes1_idx` (`pacientes_id`),
  KEY `fk_atendimentos_psicologos` (`psicologos_id`),
  CONSTRAINT `fk_atendimentos_pacientes1` FOREIGN KEY (`pacientes_id`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `fk_atendimentos_psicologos` FOREIGN KEY (`psicologos_id`) REFERENCES `psicologos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atendimentos`
--

LOCK TABLES `atendimentos` WRITE;
/*!40000 ALTER TABLE `atendimentos` DISABLE KEYS */;
INSERT INTO `atendimentos` VALUES (1,'2022-05-21','Paciente doente',2,2),(2,'2022-05-21','Paciente doente',1,3),(3,'2022-05-21','Paciente doente',1,1),(4,'2022-05-21','Paciente doente',3,1),(5,'2022-05-21','Paciente doente',4,1),(6,'2022-05-21','Paciente doente',2,3),(7,'2022-05-21','Paciente doente',2,1),(8,'2022-05-21','Paciente doente',1,2),(9,'2022-05-21','Paciente doente',1,12),(10,'2022-05-21','Paciente doente',1,10),(11,'2022-05-21','Paciente doente',1,16),(12,'2022-05-21','Paciente doente',1,0),(13,'2022-05-21','Paciente doente',1,0),(14,'2022-05-21','Paciente doente',1,0),(15,'2022-05-21','Paciente doente',1,13),(16,'2022-05-21','Paciente doente',1,14),(17,'2022-05-21','Paciente doente',1,1),(20,'2022-05-21','Paciente doente',3,4);
/*!40000 ALTER TABLE `atendimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `idade` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (1,'Victor','victor@email.com','1996-12-11 02:00:00'),(2,'Julia','julia@email.com','1999-12-03 02:00:00'),(3,'Mailton','mailton@email.com','1995-09-08 03:00:00'),(4,'Deivid','deivid@email.com','1990-10-01 03:00:00');
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psicologos`
--

DROP TABLE IF EXISTS `psicologos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `apresentacao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologos`
--

LOCK TABLES `psicologos` WRITE;
/*!40000 ALTER TABLE `psicologos` DISABLE KEYS */;
INSERT INTO `psicologos` VALUES (1,'João','joao@email.com','$2a$10$R888NnIMxnslbl.ZO0LeWu2FV95Rer3GhwOzw7B/0DVpn1woeEu6y','cara legal'),(2,'Jose','jose@email.com','$2a$10$FYlTOTyrZfZWSaI7hju8IO3E8XtdDRk1/5iVfPcJUe4Zjg3OXG052','cara chato'),(3,'Maria','maria@email.com','$2a$10$AU/F/dpAUIJjVReULwHnJu2Q3g.PHvyPA2SNShZD93Sxm5KwMz.lK','inteligente'),(4,'Paulo','maria@email.com','$2a$10$LeO/dOfr4UDsD/hqpI5GcOe8DccIMAuEV2ssbvmity354yuTMfSzq','eficiente');
/*!40000 ALTER TABLE `psicologos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'la-vie-saude-mental'
--

--
-- Dumping routines for database 'la-vie-saude-mental'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-20  2:14:54
