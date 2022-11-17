-- 워크벤치에서 생성해준 SQL
-- 수정해서 사용하면됨

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sns
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sns
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sns` DEFAULT CHARACTER SET utf8 ;
USE `sns` ;

-- -----------------------------------------------------
-- Table `sns`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(20) NOT NULL,
  `pw` VARCHAR(100) NOT NULL,
  `name` VARCHAR(10) NOT NULL,
  `birth` DATE NULL,
  `profile_img` BLOB NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `userid_UNIQUE` (`userId` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sns`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `content` VARCHAR(5000) NOT NULL,
  `date` TIMESTAMP NOT NULL,
  `img` BLOB NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_post_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sns`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(1000) NOT NULL,
  `date` TIMESTAMP NOT NULL,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comment_post1_idx` (`post_id` ASC) VISIBLE,
  INDEX `fk_comment_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `sns`.`post` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sns`.`follow`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`follow` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `followee_id` INT NOT NULL,
  `follower_id` INT NOT NULL,
  INDEX `fk_follow_user1_idx` (`followee_id` ASC) VISIBLE,
  INDEX `fk_follow_user2_idx` (`follower_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_follow_user1`
    FOREIGN KEY (`followee_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_follow_user2`
    FOREIGN KEY (`follower_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sns`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`like` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_like_post1_idx` (`post_id` ASC) VISIBLE,
  INDEX `fk_like_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_like_post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `sns`.`post` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_like_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sns`.`chatting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`chatting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(100) NOT NULL,
  `date` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_chatting_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_chatting_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sns`.`msg`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sns`.`msg` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `chatting_id` INT NOT NULL,
  `from_user_id` INT NOT NULL,
  `to_user_id` INT NOT NULL,
  `date` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_msg_user1_idx` (`to_user_id` ASC) VISIBLE,
  INDEX `fk_msg_chatting1_idx` (`chatting_id` ASC) VISIBLE,
  INDEX `fk_msg_user2_idx` (`from_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_msg_user1`
    FOREIGN KEY (`to_user_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_msg_chatting1`
    FOREIGN KEY (`chatting_id`)
    REFERENCES `sns`.`chatting` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_msg_user2`
    FOREIGN KEY (`from_user_id`)
    REFERENCES `sns`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;