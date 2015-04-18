CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(25) NULL DEFAULT 'anonymous',
  `roomname` VARCHAR(25) NULL DEFAULT 'main',
  `message` VARCHAR(140) DEFAULT 'no content',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ---
-- Test Data
-- ---

INSERT INTO `messages` (`id`,`username`,`roomname`,`message`) VALUES
('1','Kyle and Kaivon','main','ayy lmao');



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

