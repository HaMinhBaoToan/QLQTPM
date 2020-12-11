/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3366
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3366
 Source Schema         : qlkd

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 09/12/2020 15:26:37
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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
  `Goods_Quantity` decimal(10) NOT NULL,
  `Goods_Unit` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Goods_SupplierID` int(0) NOT NULL,
  `Goods_UnitCost` decimal(10, 0) NOT NULL,
  `Goods_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Goods_FromDate` datetime(0) NULL DEFAULT NULL,
  `Goods_ToDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Goods_ID`) USING BTREE,
  INDEX `fk_goods_suppliers_idx`(`Goods_SupplierID`) USING BTREE,
  CONSTRAINT `fk_goods_suppliers` FOREIGN KEY (`Goods_SupplierID`) REFERENCES `suppliers` (`Supplier_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;


-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, 'Hạt cà phê Espresso', '2020-12-09 10:36:04', 3, 'kg', 1004, 95000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (2, 'Hạt cà phê Arabica', '2020-12-09 10:36:04', 3, 'kg', 1004, 180000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (3, 'Hạt cà phê Robusta', '2020-12-09 10:36:04', 3, 'kg', 1004, 100000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (4, 'Đường trắng', '2020-12-09 10:36:04', 6, 'kg', 1004, 12000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (5, 'Đường nâu', '2020-12-09 10:36:04', 2, 'kg', 1004, 27000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (6, 'Sữa đặc', '2020-12-09 10:36:04', 12, 'Hộp', 1004, 56000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (7, 'Sữa tươi', '2020-12-09 10:36:04', 15, 'Hộp', 1004, 35000, NULL,'2020-11-01 10:36:04', '2021-12-01 10:36:04');
INSERT INTO `goods` VALUES (8, 'Trà túi lọc Cozy', '2020-12-09 10:36:04', 4, 'Hộp', 1004, 30000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (9, 'Trà túi lọc Lipton', '2020-12-09 10:36:04', 4, 'Hộp', 1005, 33000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (10, 'Trà Đen', '2020-12-09 10:36:04', 3, 'kg', 1005, 135000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (11, 'Trà Ô Long', '2020-12-09 10:36:04', 3, 'kg', 1005, 300000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (12, 'Hồng Trà', '2020-12-09 10:36:04', 3, 'kg', 1005, 135000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (13, 'Bột pudding socola', '2020-12-09 10:36:04', 7, 'kg', 1005, 145000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (14, 'Bột cacao', '2020-12-09 10:36:04', 4, 'kg', 1005, 16000, NULL,'2020-11-10 10:36:04', '2021-12-01 10:36:04');
INSERT INTO `goods` VALUES (15, 'Bột trà matcha', '2020-12-09 10:36:04', 2, 'kg', 1005, 300000, NULL,'2020-11-10 10:36:04', '2021-12-01 10:36:04');
INSERT INTO `goods` VALUES (16, 'Bột kem sữa', '2020-12-09 10:36:04', 3, 'kg', 1005, 215000, NULL,'2020-11-10 10:36:04', '2021-12-01 10:36:04');
INSERT INTO `goods` VALUES (17, 'Trân châu đen', '2020-12-09 10:36:04', 5, 'Hộp', 1005, 40000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (18, 'Hạt chia Đen', '2020-12-09 10:36:04', 1, 'kg', 1005, 200000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (19, 'Thạch đào', '2020-12-09 10:36:04', 5, 'Hộp', 1006, 60000, NULL,'2020-12-01 10:36:04', '2021-06-01 10:36:04');
INSERT INTO `goods` VALUES (20, 'Thạch trái cây', '2020-12-09 10:36:04', 5, 'Hộp', 1006, 60000, NULL,'2020-12-01 10:36:04', '2021-06-01 10:36:04');
INSERT INTO `goods` VALUES (21, 'Đào ngâm Alcurnia', '2020-12-09 10:36:04', 4, 'Hộp', 1006, 60000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (22, 'Vải đóng hộp EL GRECO', '2020-12-09 10:36:04', 4, 'Hộp', 1006, 33000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (23, 'Siro hương dâu Heston', '2020-12-09 10:36:04', 2, 'Chai', 1006, 160000, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (24, 'Socola', '2020-12-09 10:36:04', 2, 'Chai', 1006, 75000, NULL, NULL, NULL);


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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
  `Order_ID` int(0) NOT NULL,
  `Order_CustomerID` int(0) NULL DEFAULT NULL,
  `Order_EmployeesID` int(0) NULL DEFAULT NULL,
  `Order_Description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Order_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Order_Status` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Order_OrderDate` datetime(0) NULL DEFAULT NULL,
  `Order_Discount` decimal(10, 0) NULL DEFAULT NULL,
  `Order_BranchID` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Order_ID`) USING BTREE,
  INDEX `fk_orders_users_idx`(`Order_CustomerID`) USING BTREE,
  INDEX `fk_orders_users_idx1`(`Order_EmployeesID`) USING BTREE,
  INDEX `fk_orders_branch_idx`(`Order_BranchID`) USING BTREE,
  CONSTRAINT `fk_orders_users_C` FOREIGN KEY (`Order_CustomerID`) REFERENCES `users` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_users_E` FOREIGN KEY (`Order_EmployeesID`) REFERENCES `users` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_branchs` FOREIGN KEY (`Order_BranchID`) REFERENCES `branchs` (`Branch_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, NULL, 1, NULL, 'Order 1', 'Done', '2020-12-09 09:36:04',20000, 1);
INSERT INTO `orders` VALUES (2, NULL, 1, NULL, 'Order 2', 'Done', '2020-12-09 10:36:04',0, 1);
INSERT INTO `orders` VALUES (3, NULL, 1, NULL, 'Order 3', 'Done', '2020-12-09 11:36:04',10000, 1);
INSERT INTO `orders` VALUES (4, NULL, 1, NULL, 'Order 4', 'Done', '2020-12-10 10:36:04',10000, 2);
INSERT INTO `orders` VALUES (5, NULL, 1, NULL, 'Order 5', 'Canel', '2020-12-10 12:36:04',10000, 1);
INSERT INTO `orders` VALUES (6, NULL, 1, NULL, 'Order 6', 'Canel', '2020-12-10 15:36:04',20000, 2);

-- ----------------------------
-- Table structure for orders.details
-- ----------------------------
DROP TABLE IF EXISTS `ordersDetails`;
CREATE TABLE `ordersDetails`  (
  `Orders.Details_ID` int(0) NULL DEFAULT NULL,
  `Orders.Details_OrderID` int(0) NOT NULL,
  `Orders.Details_ProductID` int(0) NOT NULL,
  `Orders.Details_Quantity` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Orders.Details_OrderID`, `Orders.Details_ProductID`) USING BTREE,
  INDEX `fk_orders.details_products_idx`(`Orders.Details_ProductID`) USING BTREE,
  CONSTRAINT `fk_orders.details_orders` FOREIGN KEY (`Orders.Details_OrderID`) REFERENCES `orders` (`Order_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders.details_products` FOREIGN KEY (`Orders.Details_ProductID`) REFERENCES `products` (`Product_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders.details
-- ----------------------------
INSERT INTO `ordersDetails` VALUES (1, 1, 12, 1);
INSERT INTO `ordersDetails` VALUES (2, 1, 34, 1);
INSERT INTO `ordersDetails` VALUES (3, 2, 1 , 1);
INSERT INTO `ordersDetails` VALUES (4, 3, 36, 2);
INSERT INTO `ordersDetails` VALUES (5, 4, 26, 3);
INSERT INTO `ordersDetails` VALUES (6, 5, 17, 2);
INSERT INTO `ordersDetails` VALUES (7, 6, 22, 4);

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
  PRIMARY KEY (`Product_ID`) USING BTREE,
  INDEX `fk_products_categories_idx`(`Product_CategorieID`) USING BTREE,
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`Product_CategorieID`) REFERENCES `categories` (`Categorie_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Latte', 37000, 37000, 37000, '2020-12-09 10:36:04', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (2, 'Cappuccino', 37000, 37000, 37000, '2020-12-09 11:29:18', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (3, 'Machiato Caramel', 40000, 40000, 40000, '2020-12-09 11:30:27', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (4, 'Americano', 27000, 27000, 27000, '2020-12-09 11:30:58', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (5, 'Cà phê đen', 18000, 18000, 18000, '2020-12-09 11:30:57', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (6, 'Cà phê nâu', 23000, 23000, 23000, '2020-12-09 11:31:28', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (7, 'Cà phê bạc xỉu', 32000, 32000, 32000, '2020-12-09 11:32:01', NULL, NULL, b'1', 1);
INSERT INTO `products` VALUES (8, 'Nước chanh tươi', 32000, 32000, 32000, '2020-12-09 11:32:24', NULL, NULL, b'1', 10);
INSERT INTO `products` VALUES (9, 'Nước ép dừa', 40000, 40000, 40000, '2020-12-09 11:32:58', NULL, NULL, b'1', 10);
INSERT INTO `products` VALUES (10, 'Nước ép ổi tươi', 40000, 40000, 40000, '2020-12-09 11:33:25', NULL, NULL, b'1', 10);
INSERT INTO `products` VALUES (11, 'Nước ép cóc tươi', 40000, 40000, 40000, '2020-12-09 11:34:04', NULL, NULL, b'1', 10);
INSERT INTO `products` VALUES (12, 'Dâu tầm nha đam', 35000, 35000, 35000, '2020-12-09 11:34:23', NULL, NULL, b'1', 10);
INSERT INTO `products` VALUES (13, 'Nước ép mận', 37000, 37000, 37000, '2020-12-09 11:34:46', NULL, NULL, b'1', 10);
INSERT INTO `products` VALUES (14, 'Trà sữa trân châu trắng', 40000, 40000, 40000, '2020-12-09 14:42:29', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (15, 'Trà sữa kem cheese', 43000, 43000, 43000, '2020-12-09 14:43:48', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (16, 'Trà sữa Olong', 40000, 40000, 40000, '2020-12-09 14:44:40', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (17, 'Trà sữa trân châu đường đen', 45000, 45000, 45000, '2020-12-09 14:46:54', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (18, 'Hồng trà sữa', 37000, 37000, 37000, '2020-12-09 14:47:26', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (19, 'Trà sữa khoai môn', 35000, 35000, 35000, '2020-12-09 14:47:53', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (20, 'Trà sữa matcha', 35000, 35000, 35000, '2020-12-09 14:48:33', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (21, 'Trà sữa Chocolate', 35000, 35000, 35000, '2020-12-09 14:48:44', NULL, NULL, b'1', 11);
INSERT INTO `products` VALUES (22, 'Trà hoa quả tươi', 42000, 42000, 42000, '2020-12-09 14:51:54', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (23, 'Trà Olong hoa hồng', 25000, 25000, 25000, '2020-12-09 14:52:33', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (24, 'Trà đào miếng', 31000, 31000, 31000, '2020-12-09 14:58:09', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (25, 'Trà quất mật ong', 32000, 32000, 32000, '2020-12-09 14:58:12', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (26, 'Trà táo', 25000, 25000, 25000, '2020-12-09 14:58:15', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (27, 'Trà dâu', 25000, 25000, 25000, '2020-12-09 14:58:35', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (28, 'Trà bạc hà', 25000, 25000, 25000, '2020-12-09 14:58:35', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (29, 'Trà chanh đào', 27000, 27000, 27000, '2020-12-09 14:58:33', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (30, 'Trà bá tước mật ong', 30000, 30000, 30000, '2020-12-09 14:58:35', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (31, 'Trà hoa cúc mật ong', 32000, 32000, 32000, '2020-12-09 14:58:35', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (32, 'Trà thái xanh', 30000, 30000, 30000, '2020-12-09 14:58:35', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (33, 'Trà thạch lựu', 30000, 30000, 30000, '2020-12-09 14:58:35', NULL, NULL, b'1', 3);
INSERT INTO `products` VALUES (34, 'Sữa chua chanh dây', 42000, 42000, 42000, '2020-12-09 14:58:33', NULL, NULL, b'1', 4);
INSERT INTO `products` VALUES (35, 'Sữa chua xoài', 42000, 42000, 42000, '2020-12-09 14:58:35', NULL, NULL, b'1', 4);
INSERT INTO `products` VALUES (36, 'Sữa chua việt quất', 42000, 42000, 42000, '2020-12-09 14:58:35', NULL, NULL, b'1', 4);
INSERT INTO `products` VALUES (37, 'Sữa chua kiwi', 45000, 45000, 45000, '2020-12-09 14:58:35', NULL, NULL, b'1', 4);
INSERT INTO `products` VALUES (38, 'Sữa chua phúc bồn tử', 45000, 45000, 45000, '2020-12-09 14:58:35', NULL, NULL, b'1', 4);
INSERT INTO `products` VALUES (39, 'Sữa chua sầu riêng', 45000, 45000, 45000, '2020-12-09 14:58:35', NULL, NULL, b'1', 4);
INSERT INTO `products` VALUES (40, 'Sinh tố chay  leo', 42000, 42000, 42000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (41, 'Sinh tố viết quất', 45000, 45000, 45000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (42, 'Sinh tố kiwi', 45000, 45000, 45000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (43, 'Sinh tố dâu', 42000, 42000, 42000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (44, 'Sinh tố xoài', 42000, 42000, 42000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (45, 'Sinh tố bơ', 45000, 45000, 45000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (46, 'Sinh tố dưa hấu', 42000, 42000, 42000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (47, 'Sinh tố chuối', 42000, 42000, 42000, '2020-12-09 15:04:28', NULL, NULL, b'1', 6);
INSERT INTO `products` VALUES (48, 'Soda chanh bạc hà', 25000, 25000, 25000, '2020-12-09 15:13:13', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (49, 'Soda táo bạc hà', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (50, 'Soda việt quất bạc hà', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (51, 'Soda chanh leo', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (52, 'Soda dâu', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (53, 'Soda cam', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (54, 'Soda xoài', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (55, 'Soda đào', NULL, NULL, NULL, NULL, NULL, NULL, b'1', NULL);
INSERT INTO `products` VALUES (56, 'Soda đào', 25000, 25000, 25000, '2020-12-09 15:13:14', NULL, NULL, b'1', 9);
INSERT INTO `products` VALUES (57, 'Bánh mì thịt nướng ', 25000, 25000, 25000, '2020-12-09 15:22:30', NULL, NULL, b'1', 2);
INSERT INTO `products` VALUES (58, 'Bánh mì xìu mại', 25000, 25000, 25000, '2020-12-09 15:22:30', NULL, NULL, b'1', 2);
INSERT INTO `products` VALUES (59, 'Bánh mì gà xé', 19000, 19000, 19000, '2020-12-09 15:22:34', NULL, NULL, b'1', 2);
INSERT INTO `products` VALUES (60, 'Bánh mì cá ngừ', 19000, 19000, 19000, '2020-12-09 15:22:37', NULL, NULL, b'1', 2);
INSERT INTO `products` VALUES (61, 'Bánh chuối', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (62, 'Tiramisu', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (63, 'Mousse Đào', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (64, 'Mousse cacao', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (65, 'Phô mai trà xanh', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (66, 'Phô mai chanh dây', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (67, 'Phô mai cà phê', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);
INSERT INTO `products` VALUES (68, 'Phô mai caramel', 29000, 29000, 29000, '2020-12-09 15:22:54', NULL, NULL, b'1', 7);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `Role_ID` int(0) NOT NULL AUTO_INCREMENT,
  `Role_Name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Role_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
