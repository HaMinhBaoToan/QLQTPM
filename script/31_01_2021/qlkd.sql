-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: qlkd
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `branchs`
--

DROP TABLE IF EXISTS `branchs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branchs` (
  `Branch_ID` int NOT NULL AUTO_INCREMENT,
  `Branch_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Branch_Address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Branch_Mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Branch_IsActive` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`Branch_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branchs`
--

LOCK TABLES `branchs` WRITE;
/*!40000 ALTER TABLE `branchs` DISABLE KEYS */;
INSERT INTO `branchs` VALUES (1,'Chi Nhánh 1','720 Phạm Ngọc Thạch, Hiệp Thành, Tp. Thủ Dầu Một, Bình Dương','0327247666',_binary ''),(2,'Chi Nhánh 2','32 Yersin, Hiệp Thành, Thủ Dầu Một, Bình Dương, Việt Nam','0324466789',_binary '');
/*!40000 ALTER TABLE `branchs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `Categorie_ID` int NOT NULL AUTO_INCREMENT,
  `Categorie_Name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Categorie_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Categorie_Image` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Categorie_IsActive` bit(1) NOT NULL,
  PRIMARY KEY (`Categorie_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Coffees','cà phê',NULL,_binary ''),(2,'Bánh Mì','bánh mì mặn',NULL,_binary ''),(3,'Trà','gồm các loại trà',NULL,_binary ''),(4,'Yogurt',NULL,NULL,_binary ''),(6,'Sinh Tố',NULL,NULL,_binary ''),(7,'Bánh Ngọt','bánh su kem , tiramisu....',NULL,_binary ''),(8,'Cookies','bánh cookies socola...',NULL,_binary ''),(9,'Soda',NULL,NULL,_binary ''),(10,'Nước Ép',NULL,NULL,_binary ''),(11,'Trà sữa',NULL,NULL,_binary '');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goods` (
  `Goods_ID` int NOT NULL AUTO_INCREMENT,
  `Goods_Name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Goods_ImportDate` datetime NOT NULL,
  `Goods_Quantity` decimal(10,0) NOT NULL,
  `Goods_Unit` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Goods_SupplierID` int NOT NULL,
  `Goods_UnitCost` decimal(10,0) NOT NULL,
  `Goods_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Goods_FromDate` datetime DEFAULT NULL,
  `Goods_ToDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Goods_ID`) USING BTREE,
  KEY `fk_goods_suppliers_idx` (`Goods_SupplierID`) USING BTREE,
  CONSTRAINT `fk_goods_suppliers` FOREIGN KEY (`Goods_SupplierID`) REFERENCES `suppliers` (`Supplier_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'Hạt cà phê Espresso','2020-10-12 19:08:24',3,'kg',1004,95000,NULL,'2020-09-17 13:22:15','2021-01-17 07:27:40'),(2,'Hạt cà phê Arabica','2020-10-13 05:33:31',3,'kg',1004,180000,NULL,'2020-09-17 21:13:41','2022-09-20 15:00:24'),(3,'Hạt cà phê Robusta','2020-10-15 01:00:19',3,'kg',1004,100000,NULL,'2020-09-22 10:17:35','2022-10-13 09:26:48'),(4,'Đường trắng','2020-10-15 20:58:40',6,'kg',1004,12000,NULL,'2020-09-23 08:30:47','2022-10-16 17:44:57'),(5,'Đường nâu','2020-10-18 10:28:29',2,'kg',1004,27000,NULL,'2020-09-27 14:02:40','2022-11-05 23:34:02'),(6,'Sữa đặc','2020-10-22 10:49:16',12,'Hộp',1004,56000,NULL,'2020-09-28 18:27:03','2020-11-08 20:07:11'),(7,'Sữa tươi','2020-10-26 23:04:56',15,'Hộp',1004,35000,NULL,'2020-09-30 05:26:28','2022-12-22 23:08:58'),(8,'Trà túi lọc Cozy','2020-10-28 21:24:31',4,'Hộp',1004,30000,NULL,'2020-10-02 05:37:48','2021-01-28 20:31:01'),(9,'Trà túi lọc Lipton','2020-11-02 12:30:54',4,'Hộp',1005,33000,NULL,'2020-10-03 15:54:47','2023-02-01 11:36:12'),(10,'Trà Đen','2020-11-05 01:14:34',3,'kg',1005,135000,NULL,'2020-10-03 18:41:04','2021-03-08 12:27:17'),(11,'Trà Ô Long','2020-11-07 00:23:39',3,'kg',1005,300000,NULL,'2020-10-05 04:19:22','2023-03-23 12:01:43'),(12,'Hồng Trà','2020-11-10 17:34:35',3,'kg',1005,135000,NULL,'2020-10-07 09:46:45','2023-04-19 19:03:18'),(13,'Bột pudding socola','2020-11-16 01:19:31',7,'kg',1005,145000,NULL,'2020-10-09 15:36:14','2023-04-25 07:04:49'),(14,'Bột cacao','2020-11-18 17:33:38',4,'kg',1005,16000,NULL,'2020-10-18 07:43:47','2023-05-15 01:23:41'),(15,'Bột trà matcha','2020-11-26 15:21:09',2,'kg',1005,300000,NULL,'2020-10-19 03:52:59','2023-05-27 14:27:05'),(16,'Bột kem sữa','2020-11-27 08:42:38',3,'kg',1005,215000,NULL,'2020-10-26 01:54:18','2023-06-05 20:57:06'),(17,'Trân châu đen','2020-11-28 23:29:51',5,'Hộp',1005,40000,NULL,'2020-10-26 04:14:21','2023-06-12 14:10:20'),(18,'Hạt chia Đen','2020-12-10 08:01:37',1,'kg',1005,200000,NULL,'2020-10-31 17:09:45','2023-06-26 10:07:31'),(19,'Thạch đào','2020-12-14 08:48:01',5,'Hộp',1006,60000,NULL,'2020-11-02 03:38:24','2023-07-02 01:06:04'),(20,'Thạch trái cây','2020-12-21 11:43:44',5,'Hộp',1006,60000,NULL,'2020-11-07 20:09:23','2023-07-15 08:28:53'),(21,'Đào ngâm Alcurnia','2020-12-22 13:23:13',4,'Hộp',1006,60000,NULL,'2020-11-09 20:34:19','2023-07-27 08:20:26'),(22,'Vải đóng hộp EL GRECO','2020-12-22 13:37:50',4,'Hộp',1006,33000,NULL,'2020-11-11 15:19:55','2023-08-03 12:53:22'),(23,'Siro hương dâu Heston','2020-12-24 22:50:17',2,'Chai',1006,160000,NULL,'2020-11-15 09:01:27','2023-08-11 13:28:26'),(24,'Socola','2020-12-28 19:40:48',2,'Chai',1006,75000,NULL,'2020-11-16 03:56:55','2023-08-12 07:20:05'),(73,'Chai nước 5 lít','2021-01-19 20:50:44',3,'chai',1004,20000,NULL,'2021-01-20 00:00:00','2021-02-19 00:00:00'),(79,'Ly Nước 1000ML','2021-01-21 02:49:03',500,'Chiếc',1004,1700,NULL,'2023-02-04 00:00:00','2023-02-04 00:00:00'),(80,'Ly Nước 500ML','2021-01-21 04:16:20',60,'Chiếc',1005,1850,NULL,'2024-02-02 00:00:00','2024-02-09 00:00:00');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `Language_ID` int NOT NULL AUTO_INCREMENT,
  `Language_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Language_Description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Language_Flag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`Language_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'VN','Tiếng Việt',NULL),(2,'EN','English',NULL);
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `Order_ID` int NOT NULL AUTO_INCREMENT,
  `Order_CustomerID` int DEFAULT NULL,
  `Order_EmployeesID` int DEFAULT NULL,
  `Order_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Order_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Order_Status` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Order_OrderDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `Order_Discount` decimal(10,0) DEFAULT NULL,
  `Order_BranchID` int DEFAULT NULL,
  `Order_QuantityAmount` int DEFAULT NULL,
  `Order_PriceAmont` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`Order_ID`) USING BTREE,
  KEY `fk_orders_users_idx` (`Order_CustomerID`) USING BTREE,
  KEY `fk_orders_users_idx1` (`Order_EmployeesID`) USING BTREE,
  KEY `fk_orders_branch_idx` (`Order_BranchID`) USING BTREE,
  CONSTRAINT `fk_orders_branchs` FOREIGN KEY (`Order_BranchID`) REFERENCES `branchs` (`Branch_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_users_C` FOREIGN KEY (`Order_CustomerID`) REFERENCES `users` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_users_E` FOREIGN KEY (`Order_EmployeesID`) REFERENCES `users` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,NULL,1,NULL,'Order 1','Done','2020-01-09 09:36:04',20000,1,NULL,NULL),(2,NULL,1,NULL,'Order 2','Done','2020-02-09 10:36:04',0,1,NULL,NULL),(3,NULL,1,NULL,'Order 3','Done','2020-03-09 11:36:04',10000,1,NULL,NULL),(4,NULL,1,NULL,'Order 4','Done','2020-04-10 10:36:04',10000,2,NULL,NULL),(5,NULL,1,NULL,'Order 5','Canel','2020-05-10 12:36:04',10000,1,NULL,NULL),(6,NULL,1,NULL,'Order 6','Canel','2020-06-10 15:36:04',20000,2,NULL,NULL),(7,NULL,1,NULL,'Order 7','Done','2020-07-10 12:36:04',0,1,NULL,NULL),(8,NULL,1,NULL,'Order 8','Done','2020-08-10 15:36:04',20000,2,NULL,NULL),(9,NULL,1,NULL,'Order 9','Done','2020-08-10 15:36:04',0,2,NULL,NULL),(10,NULL,1,NULL,'Order 10','Done','2020-09-10 15:36:04',10000,2,NULL,NULL),(11,NULL,1,NULL,'Order 11','Done','2020-10-10 15:36:04',0,2,NULL,NULL),(12,NULL,1,NULL,'Order 12','Done','2020-11-10 15:36:04',10000,2,NULL,NULL),(13,NULL,1,NULL,'Order 13','Done','2020-12-10 15:36:04',20000,2,NULL,NULL),(14,NULL,1,NULL,'Order 14','Done','2020-12-10 15:36:04',10000,2,NULL,NULL),(113,NULL,1,'123','ha','Done','2020-12-31 14:22:31',0,1,6,145000),(114,NULL,1,'0327247666','Hà Minh Bảo Toàn','Done','2021-01-01 13:19:57',0,1,4,94000),(115,NULL,1,'123','123','Done','2021-01-01 13:26:05',0,1,1,19000),(116,NULL,1,'1231','123q','Done','2021-01-01 13:26:11',0,1,1,19000),(117,NULL,1,'123','123','Done','2021-01-01 14:45:05',0,1,2,38000),(118,NULL,1,'123','123','Done','2021-01-07 18:01:38',0,1,3,67000);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_details`
--

DROP TABLE IF EXISTS `orders_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_details` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int DEFAULT NULL,
  `ProductID` int DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  KEY `fk_orders_details_products_idx` (`ProductID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_details`
--

LOCK TABLES `orders_details` WRITE;
/*!40000 ALTER TABLE `orders_details` DISABLE KEYS */;
INSERT INTO `orders_details` VALUES (1,1,12,1),(2,1,34,1),(3,2,1,1),(4,3,36,2),(5,4,26,3),(6,5,17,2),(7,6,22,4),(8,7,17,9),(9,8,22,5),(10,9,1,4),(11,10,3,6),(12,11,22,6),(13,12,34,5),(14,13,23,2),(15,14,2,5),(16,14,22,5),(30,113,4,1),(31,113,7,1),(32,113,59,1),(33,113,60,2),(34,113,61,1),(35,114,4,1),(36,114,59,1),(37,114,60,1),(38,114,61,1),(39,115,59,1),(40,116,59,1),(41,117,59,1),(42,117,60,1),(43,118,59,1),(44,118,60,1),(45,118,61,1);
/*!40000 ALTER TABLE `orders_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Product_ID` int NOT NULL AUTO_INCREMENT,
  `Product_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Product_CostPrice` decimal(10,0) DEFAULT NULL,
  `Product_OldPrice` decimal(10,0) DEFAULT NULL,
  `Product_NewPrice` decimal(10,0) DEFAULT NULL,
  `Product_CreatedDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `Product_CreatedByUserID` int DEFAULT NULL,
  `Product_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Product_IsActive` bit(1) DEFAULT b'1',
  `Product_CategorieID` int DEFAULT NULL,
  `Product_Image` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`Product_ID`) USING BTREE,
  KEY `fk_products_categories_idx` (`Product_CategorieID`) USING BTREE,
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`Product_CategorieID`) REFERENCES `categories` (`Categorie_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Latte',37000,37000,37000,'2020-12-27 17:43:05',NULL,NULL,_binary '',1,'1'),(2,'Cappuccino',37000,37000,37000,'2020-12-27 17:43:09',NULL,NULL,_binary '',1,'2'),(3,'Machiato Caramel',40000,40000,40000,'2020-12-27 17:43:26',NULL,NULL,_binary '',1,'3'),(4,'Americano',27000,27000,27000,'2020-12-27 17:43:26',NULL,NULL,_binary '',1,'4'),(5,'Cà phê đen',18000,18000,18000,'2020-12-27 17:43:26',NULL,NULL,_binary '',1,'5'),(6,'Cà phê nâu',23000,23000,23000,'2020-12-27 17:43:26',NULL,NULL,_binary '',1,'6'),(7,'Cà phê bạc xỉu',32000,32000,32000,'2020-12-27 17:43:26',NULL,NULL,_binary '',1,'7'),(8,'Nước chanh tươi',32000,32000,32000,'2020-12-27 17:43:26',NULL,NULL,_binary '',10,'8'),(9,'Nước ép dừa',40000,40000,40000,'2020-12-27 17:43:26',NULL,NULL,_binary '',10,'9'),(10,'Nước ép ổi tươi',40000,40000,40000,'2020-12-27 17:43:37',NULL,NULL,_binary '',10,'10'),(11,'Nước ép cóc tươi',40000,40000,40000,'2020-12-27 17:43:38',NULL,NULL,_binary '',10,'11'),(12,'Dâu tầm nha đam',35000,35000,35000,'2020-12-27 17:43:40',NULL,NULL,_binary '',10,'12'),(13,'Nước ép mận',37000,37000,37000,'2020-12-27 17:43:41',NULL,NULL,_binary '',10,'13'),(14,'Trà sữa trân châu trắng',40000,40000,40000,'2020-12-27 17:43:42',NULL,NULL,_binary '',11,'14'),(15,'Trà sữa kem cheese',43000,43000,43000,'2020-12-27 17:43:48',NULL,NULL,_binary '',11,'15'),(16,'Trà sữa Olong',40000,40000,40000,'2020-12-27 17:43:51',NULL,NULL,_binary '',11,'16'),(17,'Trà sữa trân châu đường đen',45000,45000,45000,'2020-12-27 17:43:54',NULL,NULL,_binary '',11,'17'),(18,'Hồng trà sữa',37000,37000,37000,'2020-12-27 17:43:55',NULL,NULL,_binary '',11,'18'),(19,'Trà sữa khoai môn',35000,35000,35000,'2020-12-28 07:12:10',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',11,'19'),(20,'Trà sữa matcha',35000,35000,35000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',11,'20'),(21,'Trà sữa Chocolate',35000,35000,35000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',11,'21'),(22,'Trà hoa quả tươi',42000,42000,42000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'22'),(23,'Trà Olong hoa hồng',25000,25000,25000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'23'),(24,'Trà đào miếng',31000,31000,31000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'24'),(25,'Trà quất mật ong',32000,32000,32000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'25'),(26,'Trà táo',25000,25000,25000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'26'),(27,'Trà dâu',25000,25000,25000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'27'),(28,'Trà bạc hà',25000,25000,25000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'28'),(29,'Trà chanh đào',27000,27000,27000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'29'),(30,'Trà bá tước mật ong',30000,30000,30000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'30'),(31,'Trà hoa cúc mật ong',32000,32000,32000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'31'),(32,'Trà thái xanh',30000,30000,30000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'32'),(33,'Trà thạch lựu',30000,30000,30000,'2020-12-28 07:12:13',NULL,'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.',_binary '',3,'33'),(34,'Sữa chua chanh dây',42000,42000,42000,'2020-12-27 17:44:15',NULL,NULL,_binary '',4,'34'),(35,'Sữa chua xoài',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',4,'35'),(36,'Sữa chua việt quất',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',4,'36'),(37,'Sữa chua kiwi',45000,45000,45000,'2020-12-27 17:44:36',NULL,NULL,_binary '',4,'37'),(38,'Sữa chua phúc bồn tử',45000,45000,45000,'2020-12-27 17:44:36',NULL,NULL,_binary '',4,'38'),(39,'Sữa chua sầu riêng',45000,45000,45000,'2020-12-27 17:44:36',NULL,NULL,_binary '',4,'39'),(40,'Sinh tố chay  leo',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'40'),(41,'Sinh tố viết quất',45000,45000,45000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'41'),(42,'Sinh tố kiwi',45000,45000,45000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'42'),(43,'Sinh tố dâu',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'43'),(44,'Sinh tố xoài',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'44'),(45,'Sinh tố bơ',45000,45000,45000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'45'),(46,'Sinh tố dưa hấu',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'46'),(47,'Sinh tố chuối',42000,42000,42000,'2020-12-27 17:44:36',NULL,NULL,_binary '',6,'47'),(48,'Soda chanh bạc hà',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'48'),(49,'Soda táo bạc hà',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'49'),(50,'Soda việt quất bạc hà',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'50'),(51,'Soda chanh leo',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'51'),(52,'Soda dâu',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'52'),(53,'Soda cam',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'53'),(54,'Soda xoài',25000,25000,25000,'2020-12-27 17:44:36',NULL,NULL,_binary '',9,'54'),(55,'Soda đào',NULL,NULL,NULL,'2020-12-27 17:44:36',NULL,NULL,_binary '',NULL,'55'),(56,'Soda đào',25000,25000,25000,'2020-12-27 17:44:37',NULL,NULL,_binary '',9,'56'),(57,'Bánh mì thịt nướng ',25000,25000,25000,'2020-12-27 17:44:37',NULL,NULL,_binary '',2,'57'),(58,'Bánh mì xìu mại',25000,25000,25000,'2020-12-27 17:44:37',NULL,NULL,_binary '',2,'58'),(59,'Bánh mì gà xé',19000,19000,19000,'2020-12-27 17:44:37',NULL,NULL,_binary '',2,'59'),(60,'Bánh mì cá ngừ',19000,19000,19000,'2020-12-27 17:44:37',NULL,NULL,_binary '',2,'60'),(61,'Bánh chuối',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'61'),(62,'Tiramisu',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'62'),(63,'Mousse Đào',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'63'),(64,'Mousse cacao',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'64'),(65,'Phô mai trà xanh',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'65'),(66,'Phô mai chanh dây',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'66'),(67,'Phô mai cà phê',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'67'),(68,'Phô mai caramel',29000,29000,29000,'2020-12-27 17:44:37',NULL,NULL,_binary '',7,'68');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `Role_ID` int NOT NULL AUTO_INCREMENT,
  `Role_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Role_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Boss'),(2,'Manager'),(3,'User');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `Supplier_ID` int NOT NULL AUTO_INCREMENT,
  `Supplier_CompanyName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_ContactName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_ContacTitle` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Supplier_Address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_Mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_Homepage` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Supplier_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`Supplier_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1004,'Nhà Cung Cấp Mai Anh','Nguyễn Thị Mai Anh',NULL,'877 Cách Mạng Tháng Tám, Chánh Nghĩa, Thủ Dầu Một, Bình Dương','079841452',NULL,NULL),(1005,'Nhà Cung Cấp Chín Hưng','Trần Trung Hưng',NULL,'Số 400 Đường 30/4, Chánh Nghĩa, Thủ Dầu Một, Bình Dương','0932123652',NULL,NULL),(1006,'Nhà Cung Cấp Tạp hóa Mười','Lê Thị Muòi',NULL,'106 Đại lộ Bình Dương, Phú Hoà, Thủ Dầu Một, Bình Dương','093340425',NULL,NULL);
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useds`
--

DROP TABLE IF EXISTS `useds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useds` (
  `Used_ID` int NOT NULL AUTO_INCREMENT,
  `Used_Goods_ID` int NOT NULL,
  `Used_Quantity` int NOT NULL,
  `Used_Description` varbinary(255) DEFAULT NULL,
  `Used_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Used_ID`) USING BTREE,
  KEY `Used_Goods_ID` (`Used_Goods_ID`) USING BTREE,
  CONSTRAINT `useds_ibfk_1` FOREIGN KEY (`Used_Goods_ID`) REFERENCES `goods` (`Goods_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useds`
--

LOCK TABLES `useds` WRITE;
/*!40000 ALTER TABLE `useds` DISABLE KEYS */;
INSERT INTO `useds` VALUES (1,6,1,NULL,'2020-10-10 19:06:20'),(2,7,3,NULL,'2021-01-26 19:06:39'),(3,5,1,NULL,'2021-01-05 19:06:42'),(15,79,500,NULL,'2021-01-21 02:50:00'),(17,73,1,NULL,'2021-01-21 02:59:39'),(18,73,2,NULL,'2021-01-21 02:59:44'),(19,80,35,NULL,'2021-01-21 04:16:43'),(20,80,25,NULL,'2021-01-21 04:16:51');
/*!40000 ALTER TABLE `useds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `User_ID` int NOT NULL AUTO_INCREMENT,
  `User_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `User_Password` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `User_FullName` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `User_Email` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `User_IsLock` bit(1) DEFAULT NULL,
  `User_Mobile` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `User_Avatar` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `User_CreatedDate` datetime DEFAULT NULL,
  `User_LoginLastesDate` datetime DEFAULT NULL,
  `User_DoB` date DEFAULT NULL,
  `User_Address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `rfToken` varchar(255) DEFAULT NULL,
  `User_Role` int NOT NULL,
  PRIMARY KEY (`User_ID`) USING BTREE,
  KEY `fk_Users_Roles_idx` (`User_Role`) USING BTREE,
  CONSTRAINT `fk_Users_Roles` FOREIGN KEY (`User_Role`) REFERENCES `roles` (`Role_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='				';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'thanhthuy','123456',NULL,NULL,NULL,'0123456789',NULL,NULL,NULL,NULL,NULL,NULL,3),(2,'Vinh Le','$2a$10$/d8czRTjh8BsLQ/gFu57FugbOV1UDPQzP8zZZHBoALyILONDEWmLu',NULL,'lengocvinh.729@gmail.com',NULL,'123123123',NULL,NULL,NULL,NULL,NULL,'vScOKMkf0swdzlVA6dWOVIELVGHsGCnA',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'qlkd'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-31 21:37:25
