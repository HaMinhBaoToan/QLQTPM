/*
 Navicat Premium Data Transfer

 Source Server         : mysqlwbb
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3366
 Source Schema         : qlkd

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 26/01/2021 09:57:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for branchs
-- ----------------------------
DROP TABLE IF EXISTS `branchs`;
CREATE TABLE `branchs`  (
  `Branch_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Branch_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Branch_Address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Branch_Mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Branch_IsActive` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`Branch_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of branchs
-- ----------------------------
INSERT INTO `branchs` VALUES (1, 'Chi Nhánh 1', '720 Phạm Ngọc Thạch, Hiệp Thành, Tp. Thủ Dầu Một, Bình Dương', '0327247666', b'1');
INSERT INTO `branchs` VALUES (2, 'Chi Nhánh 2', '32 Yersin, Hiệp Thành, Thủ Dầu Một, Bình Dương, Việt Nam', '0324466789', b'1');

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `Categorie_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Categorie_Name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Categorie_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Categorie_Image` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Categorie_IsActive` bit(1) NOT NULL,
  PRIMARY KEY (`Categorie_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'Coffees', 'cà phê', NULL, b'1');
INSERT INTO `categories` VALUES (2, 'Bánh Mì', 'bánh mì mặn', NULL, b'1');
INSERT INTO `categories` VALUES (3, 'Trà', 'gồm các loại trà', NULL, b'1');
INSERT INTO `categories` VALUES (4, 'Yogurt', NULL, NULL, b'1');
INSERT INTO `categories` VALUES (6, 'Sinh Tố', NULL, NULL, b'1');
INSERT INTO `categories` VALUES (7, 'Bánh Ngọt', 'bánh su kem , tiramisu....', NULL, b'1');
INSERT INTO `categories` VALUES (8, 'Cookies', 'bánh cookies socola...', NULL, b'1');
INSERT INTO `categories` VALUES (9, 'Soda', NULL, NULL, b'1');
INSERT INTO `categories` VALUES (10, 'Nước Ép', NULL, NULL, b'1');
INSERT INTO `categories` VALUES (11, 'Trà sữa', NULL, NULL, b'1');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `Goods_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Goods_Name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Goods_ImportDate` datetime(0) NOT NULL,
  `Goods_Quantity` decimal(10, 0) NOT NULL,
  `Goods_Unit` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Goods_SupplierID` int(0) NOT NULL,
  `Goods_UnitCost` decimal(10, 0) NOT NULL,
  `Goods_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Goods_FromDate` datetime(0) NULL DEFAULT NULL,
  `Goods_ToDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Goods_ID`) USING BTREE,
  INDEX `fk_goods_suppliers_idx`(`Goods_SupplierID`) USING BTREE,
  CONSTRAINT `fk_goods_suppliers` FOREIGN KEY (`Goods_SupplierID`) REFERENCES `suppliers` (`Supplier_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 81 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, 'Hạt cà phê Espresso', '2020-10-12 19:08:24', 3, 'kg', 1004, 95000, NULL, '2020-09-17 13:22:15', '2021-01-17 07:27:40');
INSERT INTO `goods` VALUES (2, 'Hạt cà phê Arabica', '2020-10-13 05:33:31', 3, 'kg', 1004, 180000, NULL, '2020-09-17 21:13:41', '2022-09-20 15:00:24');
INSERT INTO `goods` VALUES (3, 'Hạt cà phê Robusta', '2020-10-15 01:00:19', 3, 'kg', 1004, 100000, NULL, '2020-09-22 10:17:35', '2022-10-13 09:26:48');
INSERT INTO `goods` VALUES (4, 'Đường trắng', '2020-10-15 20:58:40', 6, 'kg', 1004, 12000, NULL, '2020-09-23 08:30:47', '2022-10-16 17:44:57');
INSERT INTO `goods` VALUES (5, 'Đường nâu', '2020-10-18 10:28:29', 2, 'kg', 1004, 27000, NULL, '2020-09-27 14:02:40', '2022-11-05 23:34:02');
INSERT INTO `goods` VALUES (6, 'Sữa đặc', '2020-10-22 10:49:16', 12, 'Hộp', 1004, 56000, NULL, '2020-09-28 18:27:03', '2020-11-08 20:07:11');
INSERT INTO `goods` VALUES (7, 'Sữa tươi', '2020-10-26 23:04:56', 15, 'Hộp', 1004, 35000, NULL, '2020-09-30 05:26:28', '2022-12-22 23:08:58');
INSERT INTO `goods` VALUES (8, 'Trà túi lọc Cozy', '2020-10-28 21:24:31', 4, 'Hộp', 1004, 30000, NULL, '2020-10-02 05:37:48', '2021-01-28 20:31:01');
INSERT INTO `goods` VALUES (9, 'Trà túi lọc Lipton', '2020-11-02 12:30:54', 4, 'Hộp', 1005, 33000, NULL, '2020-10-03 15:54:47', '2023-02-01 11:36:12');
INSERT INTO `goods` VALUES (10, 'Trà Đen', '2020-11-05 01:14:34', 3, 'kg', 1005, 135000, NULL, '2020-10-03 18:41:04', '2021-03-08 12:27:17');
INSERT INTO `goods` VALUES (11, 'Trà Ô Long', '2020-11-07 00:23:39', 3, 'kg', 1005, 300000, NULL, '2020-10-05 04:19:22', '2023-03-23 12:01:43');
INSERT INTO `goods` VALUES (12, 'Hồng Trà', '2020-11-10 17:34:35', 3, 'kg', 1005, 135000, NULL, '2020-10-07 09:46:45', '2023-04-19 19:03:18');
INSERT INTO `goods` VALUES (13, 'Bột pudding socola', '2020-11-16 01:19:31', 7, 'kg', 1005, 145000, NULL, '2020-10-09 15:36:14', '2023-04-25 07:04:49');
INSERT INTO `goods` VALUES (14, 'Bột cacao', '2020-11-18 17:33:38', 4, 'kg', 1005, 16000, NULL, '2020-10-18 07:43:47', '2023-05-15 01:23:41');
INSERT INTO `goods` VALUES (15, 'Bột trà matcha', '2020-11-26 15:21:09', 2, 'kg', 1005, 300000, NULL, '2020-10-19 03:52:59', '2023-05-27 14:27:05');
INSERT INTO `goods` VALUES (16, 'Bột kem sữa', '2020-11-27 08:42:38', 3, 'kg', 1005, 215000, NULL, '2020-10-26 01:54:18', '2023-06-05 20:57:06');
INSERT INTO `goods` VALUES (17, 'Trân châu đen', '2020-11-28 23:29:51', 5, 'Hộp', 1005, 40000, NULL, '2020-10-26 04:14:21', '2023-06-12 14:10:20');
INSERT INTO `goods` VALUES (18, 'Hạt chia Đen', '2020-12-10 08:01:37', 1, 'kg', 1005, 200000, NULL, '2020-10-31 17:09:45', '2023-06-26 10:07:31');
INSERT INTO `goods` VALUES (19, 'Thạch đào', '2020-12-14 08:48:01', 5, 'Hộp', 1006, 60000, NULL, '2020-11-02 03:38:24', '2023-07-02 01:06:04');
INSERT INTO `goods` VALUES (20, 'Thạch trái cây', '2020-12-21 11:43:44', 5, 'Hộp', 1006, 60000, NULL, '2020-11-07 20:09:23', '2023-07-15 08:28:53');
INSERT INTO `goods` VALUES (21, 'Đào ngâm Alcurnia', '2020-12-22 13:23:13', 4, 'Hộp', 1006, 60000, NULL, '2020-11-09 20:34:19', '2023-07-27 08:20:26');
INSERT INTO `goods` VALUES (22, 'Vải đóng hộp EL GRECO', '2020-12-22 13:37:50', 4, 'Hộp', 1006, 33000, NULL, '2020-11-11 15:19:55', '2023-08-03 12:53:22');
INSERT INTO `goods` VALUES (23, 'Siro hương dâu Heston', '2020-12-24 22:50:17', 2, 'Chai', 1006, 160000, NULL, '2020-11-15 09:01:27', '2023-08-11 13:28:26');
INSERT INTO `goods` VALUES (24, 'Socola', '2020-12-28 19:40:48', 2, 'Chai', 1006, 75000, NULL, '2020-11-16 03:56:55', '2023-08-12 07:20:05');
INSERT INTO `goods` VALUES (73, 'Chai nước 5 lít', '2021-01-19 20:50:44', 3, 'chai', 1004, 20000, NULL, '2021-01-20 00:00:00', '2021-02-19 00:00:00');
INSERT INTO `goods` VALUES (79, 'Ly Nước 1000ML', '2021-01-21 02:49:03', 500, 'Chiếc', 1004, 1700, NULL, '2023-02-04 00:00:00', '2023-02-04 00:00:00');
INSERT INTO `goods` VALUES (80, 'Ly Nước 500ML', '2021-01-21 04:16:20', 60, 'Chiếc', 1005, 1850, NULL, '2024-02-02 00:00:00', '2024-02-09 00:00:00');

-- ----------------------------
-- Table structure for languages
-- ----------------------------
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages`  (
  `Language_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Language_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Language_Description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Language_Flag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Language_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of languages
-- ----------------------------
INSERT INTO `languages` VALUES (1, 'VN', 'Tiếng Việt', NULL);
INSERT INTO `languages` VALUES (2, 'EN', 'English', NULL);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `Order_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Order_CustomerID` int(0) NULL DEFAULT NULL,
  `Order_EmployeesID` int(0) NULL DEFAULT NULL,
  `Order_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Order_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Order_Status` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Order_OrderDate` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `Order_Discount` decimal(10, 0) NULL DEFAULT NULL,
  `Order_BranchID` int(0) NULL DEFAULT NULL,
  `Order_QuantityAmount` int(0) NULL DEFAULT NULL,
  `Order_PriceAmont` decimal(10, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`Order_ID`) USING BTREE,
  INDEX `fk_orders_users_idx`(`Order_CustomerID`) USING BTREE,
  INDEX `fk_orders_users_idx1`(`Order_EmployeesID`) USING BTREE,
  INDEX `fk_orders_branch_idx`(`Order_BranchID`) USING BTREE,
  CONSTRAINT `fk_orders_branchs` FOREIGN KEY (`Order_BranchID`) REFERENCES `branchs` (`Branch_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_users_C` FOREIGN KEY (`Order_CustomerID`) REFERENCES `users` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_users_E` FOREIGN KEY (`Order_EmployeesID`) REFERENCES `users` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 119 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, NULL, 1, NULL, 'Order 1', 'Done', '2020-01-09 09:36:04', 20000, 1, NULL, NULL);
INSERT INTO `orders` VALUES (2, NULL, 1, NULL, 'Order 2', 'Done', '2020-02-09 10:36:04', 0, 1, NULL, NULL);
INSERT INTO `orders` VALUES (3, NULL, 1, NULL, 'Order 3', 'Done', '2020-03-09 11:36:04', 10000, 1, NULL, NULL);
INSERT INTO `orders` VALUES (4, NULL, 1, NULL, 'Order 4', 'Done', '2020-04-10 10:36:04', 10000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (5, NULL, 1, NULL, 'Order 5', 'Canel', '2020-05-10 12:36:04', 10000, 1, NULL, NULL);
INSERT INTO `orders` VALUES (6, NULL, 1, NULL, 'Order 6', 'Canel', '2020-06-10 15:36:04', 20000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (7, NULL, 1, NULL, 'Order 7', 'Done', '2020-07-10 12:36:04', 0, 1, NULL, NULL);
INSERT INTO `orders` VALUES (8, NULL, 1, NULL, 'Order 8', 'Done', '2020-08-10 15:36:04', 20000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (9, NULL, 1, NULL, 'Order 9', 'Done', '2020-08-10 15:36:04', 0, 2, NULL, NULL);
INSERT INTO `orders` VALUES (10, NULL, 1, NULL, 'Order 10', 'Done', '2020-09-10 15:36:04', 10000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (11, NULL, 1, NULL, 'Order 11', 'Done', '2020-10-10 15:36:04', 0, 2, NULL, NULL);
INSERT INTO `orders` VALUES (12, NULL, 1, NULL, 'Order 12', 'Done', '2020-11-10 15:36:04', 10000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (13, NULL, 1, NULL, 'Order 13', 'Done', '2020-12-10 15:36:04', 20000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (14, NULL, 1, NULL, 'Order 14', 'Done', '2020-12-10 15:36:04', 10000, 2, NULL, NULL);
INSERT INTO `orders` VALUES (113, NULL, 1, '123', 'ha', 'Done', '2020-12-31 14:22:31', 0, 1, 6, 145000);
INSERT INTO `orders` VALUES (114, NULL, 1, '0327247666', 'Hà Minh Bảo Toàn', 'Done', '2021-01-01 13:19:57', 0, 1, 4, 94000);
INSERT INTO `orders` VALUES (115, NULL, 1, '123', '123', 'Done', '2021-01-01 13:26:05', 0, 1, 1, 19000);
INSERT INTO `orders` VALUES (116, NULL, 1, '1231', '123q', 'Done', '2021-01-01 13:26:11', 0, 1, 1, 19000);
INSERT INTO `orders` VALUES (117, NULL, 1, '123', '123', 'Done', '2021-01-01 14:45:05', 0, 1, 2, 38000);
INSERT INTO `orders` VALUES (118, NULL, 1, '123', '123', 'Done', '2021-01-07 18:01:38', 0, 1, 3, 67000);

-- ----------------------------
-- Table structure for orders_details
-- ----------------------------
DROP TABLE IF EXISTS `orders_details`;
CREATE TABLE `orders_details`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `OrderID` int(0) NULL DEFAULT NULL,
  `ProductID` int(0) NULL DEFAULT NULL,
  `Quantity` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `fk_orders_details_products_idx`(`ProductID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders_details
-- ----------------------------
INSERT INTO `orders_details` VALUES (1, 1, 12, 1);
INSERT INTO `orders_details` VALUES (2, 1, 34, 1);
INSERT INTO `orders_details` VALUES (3, 2, 1, 1);
INSERT INTO `orders_details` VALUES (4, 3, 36, 2);
INSERT INTO `orders_details` VALUES (5, 4, 26, 3);
INSERT INTO `orders_details` VALUES (6, 5, 17, 2);
INSERT INTO `orders_details` VALUES (7, 6, 22, 4);
INSERT INTO `orders_details` VALUES (8, 7, 17, 9);
INSERT INTO `orders_details` VALUES (9, 8, 22, 5);
INSERT INTO `orders_details` VALUES (10, 9, 1, 4);
INSERT INTO `orders_details` VALUES (11, 10, 3, 6);
INSERT INTO `orders_details` VALUES (12, 11, 22, 6);
INSERT INTO `orders_details` VALUES (13, 12, 34, 5);
INSERT INTO `orders_details` VALUES (14, 13, 23, 2);
INSERT INTO `orders_details` VALUES (15, 14, 2, 5);
INSERT INTO `orders_details` VALUES (16, 14, 22, 5);
INSERT INTO `orders_details` VALUES (30, 113, 4, 1);
INSERT INTO `orders_details` VALUES (31, 113, 7, 1);
INSERT INTO `orders_details` VALUES (32, 113, 59, 1);
INSERT INTO `orders_details` VALUES (33, 113, 60, 2);
INSERT INTO `orders_details` VALUES (34, 113, 61, 1);
INSERT INTO `orders_details` VALUES (35, 114, 4, 1);
INSERT INTO `orders_details` VALUES (36, 114, 59, 1);
INSERT INTO `orders_details` VALUES (37, 114, 60, 1);
INSERT INTO `orders_details` VALUES (38, 114, 61, 1);
INSERT INTO `orders_details` VALUES (39, 115, 59, 1);
INSERT INTO `orders_details` VALUES (40, 116, 59, 1);
INSERT INTO `orders_details` VALUES (41, 117, 59, 1);
INSERT INTO `orders_details` VALUES (42, 117, 60, 1);
INSERT INTO `orders_details` VALUES (43, 118, 59, 1);
INSERT INTO `orders_details` VALUES (44, 118, 60, 1);
INSERT INTO `orders_details` VALUES (45, 118, 61, 1);

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `Product_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Product_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Product_CostPrice` decimal(10, 0) NULL DEFAULT NULL,
  `Product_OldPrice` decimal(10, 0) NULL DEFAULT NULL,
  `Product_NewPrice` decimal(10, 0) NULL DEFAULT NULL,
  `Product_CreatedDate` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `Product_CreatedByUserID` int(0) NULL DEFAULT NULL,
  `Product_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Product_IsActive` bit(1) NULL DEFAULT b'1',
  `Product_CategorieID` int(0) NULL DEFAULT NULL,
  `Product_Image` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Product_ID`) USING BTREE,
  INDEX `fk_products_categories_idx`(`Product_CategorieID`) USING BTREE,
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`Product_CategorieID`) REFERENCES `categories` (`Categorie_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Latte', 37000, 37000, 37000, '2020-12-27 17:43:05', NULL, NULL, b'1', 1, '1');
INSERT INTO `products` VALUES (2, 'Cappuccino', 37000, 37000, 37000, '2020-12-27 17:43:09', NULL, NULL, b'1', 1, '2');
INSERT INTO `products` VALUES (3, 'Machiato Caramel', 40000, 40000, 40000, '2020-12-27 17:43:26', NULL, NULL, b'1', 1, '3');
INSERT INTO `products` VALUES (4, 'Americano', 27000, 27000, 27000, '2020-12-27 17:43:26', NULL, NULL, b'1', 1, '4');
INSERT INTO `products` VALUES (5, 'Cà phê đen', 18000, 18000, 18000, '2020-12-27 17:43:26', NULL, NULL, b'1', 1, '5');
INSERT INTO `products` VALUES (6, 'Cà phê nâu', 23000, 23000, 23000, '2020-12-27 17:43:26', NULL, NULL, b'1', 1, '6');
INSERT INTO `products` VALUES (7, 'Cà phê bạc xỉu', 32000, 32000, 32000, '2020-12-27 17:43:26', NULL, NULL, b'1', 1, '7');
INSERT INTO `products` VALUES (8, 'Nước chanh tươi', 32000, 32000, 32000, '2020-12-27 17:43:26', NULL, NULL, b'1', 10, '8');
INSERT INTO `products` VALUES (9, 'Nước ép dừa', 40000, 40000, 40000, '2020-12-27 17:43:26', NULL, NULL, b'1', 10, '9');
INSERT INTO `products` VALUES (10, 'Nước ép ổi tươi', 40000, 40000, 40000, '2020-12-27 17:43:37', NULL, NULL, b'1', 10, '10');
INSERT INTO `products` VALUES (11, 'Nước ép cóc tươi', 40000, 40000, 40000, '2020-12-27 17:43:38', NULL, NULL, b'1', 10, '11');
INSERT INTO `products` VALUES (12, 'Dâu tầm nha đam', 35000, 35000, 35000, '2020-12-27 17:43:40', NULL, NULL, b'1', 10, '12');
INSERT INTO `products` VALUES (13, 'Nước ép mận', 37000, 37000, 37000, '2020-12-27 17:43:41', NULL, NULL, b'1', 10, '13');
INSERT INTO `products` VALUES (14, 'Trà sữa trân châu trắng', 40000, 40000, 40000, '2020-12-27 17:43:42', NULL, NULL, b'1', 11, '14');
INSERT INTO `products` VALUES (15, 'Trà sữa kem cheese', 43000, 43000, 43000, '2020-12-27 17:43:48', NULL, NULL, b'1', 11, '15');
INSERT INTO `products` VALUES (16, 'Trà sữa Olong', 40000, 40000, 40000, '2020-12-27 17:43:51', NULL, NULL, b'1', 11, '16');
INSERT INTO `products` VALUES (17, 'Trà sữa trân châu đường đen', 45000, 45000, 45000, '2020-12-27 17:43:54', NULL, NULL, b'1', 11, '17');
INSERT INTO `products` VALUES (18, 'Hồng trà sữa', 37000, 37000, 37000, '2020-12-27 17:43:55', NULL, NULL, b'1', 11, '18');
INSERT INTO `products` VALUES (19, 'Trà sữa khoai môn', 35000, 35000, 35000, '2020-12-28 07:12:10', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 11, '19');
INSERT INTO `products` VALUES (20, 'Trà sữa matcha', 35000, 35000, 35000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 11, '20');
INSERT INTO `products` VALUES (21, 'Trà sữa Chocolate', 35000, 35000, 35000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 11, '21');
INSERT INTO `products` VALUES (22, 'Trà hoa quả tươi', 42000, 42000, 42000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '22');
INSERT INTO `products` VALUES (23, 'Trà Olong hoa hồng', 25000, 25000, 25000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '23');
INSERT INTO `products` VALUES (24, 'Trà đào miếng', 31000, 31000, 31000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '24');
INSERT INTO `products` VALUES (25, 'Trà quất mật ong', 32000, 32000, 32000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '25');
INSERT INTO `products` VALUES (26, 'Trà táo', 25000, 25000, 25000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '26');
INSERT INTO `products` VALUES (27, 'Trà dâu', 25000, 25000, 25000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '27');
INSERT INTO `products` VALUES (28, 'Trà bạc hà', 25000, 25000, 25000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '28');
INSERT INTO `products` VALUES (29, 'Trà chanh đào', 27000, 27000, 27000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '29');
INSERT INTO `products` VALUES (30, 'Trà bá tước mật ong', 30000, 30000, 30000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '30');
INSERT INTO `products` VALUES (31, 'Trà hoa cúc mật ong', 32000, 32000, 32000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '31');
INSERT INTO `products` VALUES (32, 'Trà thái xanh', 30000, 30000, 30000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '32');
INSERT INTO `products` VALUES (33, 'Trà thạch lựu', 30000, 30000, 30000, '2020-12-28 07:12:13', NULL, 'Hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân.', b'1', 3, '33');
INSERT INTO `products` VALUES (34, 'Sữa chua chanh dây', 42000, 42000, 42000, '2020-12-27 17:44:15', NULL, NULL, b'1', 4, '34');
INSERT INTO `products` VALUES (35, 'Sữa chua xoài', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 4, '35');
INSERT INTO `products` VALUES (36, 'Sữa chua việt quất', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 4, '36');
INSERT INTO `products` VALUES (37, 'Sữa chua kiwi', 45000, 45000, 45000, '2020-12-27 17:44:36', NULL, NULL, b'1', 4, '37');
INSERT INTO `products` VALUES (38, 'Sữa chua phúc bồn tử', 45000, 45000, 45000, '2020-12-27 17:44:36', NULL, NULL, b'1', 4, '38');
INSERT INTO `products` VALUES (39, 'Sữa chua sầu riêng', 45000, 45000, 45000, '2020-12-27 17:44:36', NULL, NULL, b'1', 4, '39');
INSERT INTO `products` VALUES (40, 'Sinh tố chay  leo', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '40');
INSERT INTO `products` VALUES (41, 'Sinh tố viết quất', 45000, 45000, 45000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '41');
INSERT INTO `products` VALUES (42, 'Sinh tố kiwi', 45000, 45000, 45000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '42');
INSERT INTO `products` VALUES (43, 'Sinh tố dâu', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '43');
INSERT INTO `products` VALUES (44, 'Sinh tố xoài', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '44');
INSERT INTO `products` VALUES (45, 'Sinh tố bơ', 45000, 45000, 45000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '45');
INSERT INTO `products` VALUES (46, 'Sinh tố dưa hấu', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '46');
INSERT INTO `products` VALUES (47, 'Sinh tố chuối', 42000, 42000, 42000, '2020-12-27 17:44:36', NULL, NULL, b'1', 6, '47');
INSERT INTO `products` VALUES (48, 'Soda chanh bạc hà', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '48');
INSERT INTO `products` VALUES (49, 'Soda táo bạc hà', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '49');
INSERT INTO `products` VALUES (50, 'Soda việt quất bạc hà', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '50');
INSERT INTO `products` VALUES (51, 'Soda chanh leo', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '51');
INSERT INTO `products` VALUES (52, 'Soda dâu', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '52');
INSERT INTO `products` VALUES (53, 'Soda cam', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '53');
INSERT INTO `products` VALUES (54, 'Soda xoài', 25000, 25000, 25000, '2020-12-27 17:44:36', NULL, NULL, b'1', 9, '54');
INSERT INTO `products` VALUES (55, 'Soda đào', NULL, NULL, NULL, '2020-12-27 17:44:36', NULL, NULL, b'1', NULL, '55');
INSERT INTO `products` VALUES (56, 'Soda đào', 25000, 25000, 25000, '2020-12-27 17:44:37', NULL, NULL, b'1', 9, '56');
INSERT INTO `products` VALUES (57, 'Bánh mì thịt nướng ', 25000, 25000, 25000, '2020-12-27 17:44:37', NULL, NULL, b'1', 2, '57');
INSERT INTO `products` VALUES (58, 'Bánh mì xìu mại', 25000, 25000, 25000, '2020-12-27 17:44:37', NULL, NULL, b'1', 2, '58');
INSERT INTO `products` VALUES (59, 'Bánh mì gà xé', 19000, 19000, 19000, '2020-12-27 17:44:37', NULL, NULL, b'1', 2, '59');
INSERT INTO `products` VALUES (60, 'Bánh mì cá ngừ', 19000, 19000, 19000, '2020-12-27 17:44:37', NULL, NULL, b'1', 2, '60');
INSERT INTO `products` VALUES (61, 'Bánh chuối', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '61');
INSERT INTO `products` VALUES (62, 'Tiramisu', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '62');
INSERT INTO `products` VALUES (63, 'Mousse Đào', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '63');
INSERT INTO `products` VALUES (64, 'Mousse cacao', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '64');
INSERT INTO `products` VALUES (65, 'Phô mai trà xanh', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '65');
INSERT INTO `products` VALUES (66, 'Phô mai chanh dây', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '66');
INSERT INTO `products` VALUES (67, 'Phô mai cà phê', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '67');
INSERT INTO `products` VALUES (68, 'Phô mai caramel', 29000, 29000, 29000, '2020-12-27 17:44:37', NULL, NULL, b'1', 7, '68');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `Role_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Role_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Role_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'Boss');
INSERT INTO `roles` VALUES (2, 'Manager');
INSERT INTO `roles` VALUES (3, 'User');

-- ----------------------------
-- Table structure for suppliers
-- ----------------------------
DROP TABLE IF EXISTS `suppliers`;
CREATE TABLE `suppliers`  (
  `Supplier_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Supplier_CompanyName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_ContactName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_ContacTitle` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Supplier_Address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_Mobile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Supplier_Homepage` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Supplier_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Supplier_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1007 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of suppliers
-- ----------------------------
INSERT INTO `suppliers` VALUES (1004, 'Nhà Cung Cấp Mai Anh', 'Nguyễn Thị Mai Anh', NULL, '877 Cách Mạng Tháng Tám, Chánh Nghĩa, Thủ Dầu Một, Bình Dương', '079841452', NULL, NULL);
INSERT INTO `suppliers` VALUES (1005, 'Nhà Cung Cấp Chín Hưng', 'Trần Trung Hưng', NULL, 'Số 400 Đường 30/4, Chánh Nghĩa, Thủ Dầu Một, Bình Dương', '0932123652', NULL, NULL);
INSERT INTO `suppliers` VALUES (1006, 'Nhà Cung Cấp Tạp hóa Mười', 'Lê Thị Muòi', NULL, '106 Đại lộ Bình Dương, Phú Hoà, Thủ Dầu Một, Bình Dương', '093340425', NULL, NULL);

-- ----------------------------
-- Table structure for useds
-- ----------------------------
DROP TABLE IF EXISTS `useds`;
CREATE TABLE `useds`  (
  `Used_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Used_Goods_ID` int(0) NOT NULL,
  `Used_Quantity` int(0) NOT NULL,
  `Used_Description` varbinary(255) NULL DEFAULT NULL,
  `Used_Date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Used_ID`) USING BTREE,
  INDEX `Used_Goods_ID`(`Used_Goods_ID`) USING BTREE,
  CONSTRAINT `useds_ibfk_1` FOREIGN KEY (`Used_Goods_ID`) REFERENCES `goods` (`Goods_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of useds
-- ----------------------------
INSERT INTO `useds` VALUES (1, 6, 1, NULL, '2020-10-10 19:06:20');
INSERT INTO `useds` VALUES (2, 7, 3, NULL, '2021-01-26 19:06:39');
INSERT INTO `useds` VALUES (3, 5, 1, NULL, '2021-01-05 19:06:42');
INSERT INTO `useds` VALUES (15, 79, 500, NULL, '2021-01-21 02:50:00');
INSERT INTO `useds` VALUES (17, 73, 1, NULL, '2021-01-21 02:59:39');
INSERT INTO `useds` VALUES (18, 73, 2, NULL, '2021-01-21 02:59:44');
INSERT INTO `useds` VALUES (19, 80, 35, NULL, '2021-01-21 04:16:43');
INSERT INTO `useds` VALUES (20, 80, 25, NULL, '2021-01-21 04:16:51');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `User_ID` int(0) NOT NULL AUTO_INCREMENT,
  `User_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `User_Password` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `User_FullName` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `User_Email` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `User_IsLock` bit(1) NULL DEFAULT NULL,
  `User_Mobile` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `User_Avatar` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `User_CreatedDate` datetime(0) NULL DEFAULT NULL,
  `User_LoginLastesDate` datetime(0) NULL DEFAULT NULL,
  `User_DoB` date NULL DEFAULT NULL,
  `User_Address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `User_Role` int(0) NOT NULL,
  PRIMARY KEY (`User_ID`) USING BTREE,
  INDEX `fk_Users_Roles_idx`(`User_Role`) USING BTREE,
  CONSTRAINT `fk_Users_Roles` FOREIGN KEY (`User_Role`) REFERENCES `roles` (`Role_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '				' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'thanhthuy', '123456', NULL, NULL, NULL, '0123456789', NULL, NULL, NULL, NULL, NULL, 3);

SET FOREIGN_KEY_CHECKS = 1;
