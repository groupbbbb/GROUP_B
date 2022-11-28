-- 워크벤치에서 생성해준 SQL
-- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- ##############################################################################
--                                    DB 생성
-- ##############################################################################
-- -----------------------------------------------------
-- DB명 : pocogram으로 설정
-- -----------------------------------------------------
CREATE DATABASE pocogram DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
use pocogram;


-- ##############################################################################
--                                  테이블 생성
-- ##############################################################################
-- -----------------------------------------------------
-- Table `pocogram`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userID` VARCHAR(20) NOT NULL UNIQUE,
  `userPW` VARCHAR(1000) NOT NULL,
  `name` VARCHAR(10) NOT NULL,
  `birth` DATE NULL,
  `profile_img` VARCHAR(500) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `pocogram`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `content` VARCHAR(5000) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `img_src` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_post_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `pocogram`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `pocogram`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(1000) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_comment_post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `pocogram`.`post` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_comment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `pocogram`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);



-- -----------------------------------------------------
-- Table `pocogram`.`likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`likes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_likes_post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `pocogram`.`post` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_likes_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `pocogram`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
