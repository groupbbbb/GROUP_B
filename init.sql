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
  `userPW` VARCHAR(100) NOT NULL,
  `name` VARCHAR(10) NOT NULL,
  `birth` DATE NULL,
  `profile_img` BLOB NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `pocogram`.`post`
-- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `pocogram`.`post` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `user_id` INT NOT NULL,
--   `content` VARCHAR(5000) NOT NULL,
--   `date` TIMESTAMP NOT NULL,
--   `img` BLOB NULL,
--   PRIMARY KEY (`id`),
--   CONSTRAINT `fk_post_user`
--     FOREIGN KEY (`user_id`)
--     REFERENCES `pocogram`.`user` (`id`)
--     ON DELETE CASCADE
--     ON UPDATE CASCADE);


CREATE TABLE IF NOT EXISTS `pocogram`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `content` VARCHAR(5000) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `img_src` VARCHAR(500) NULL,
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
-- Table `pocogram`.`follow`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`follow` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `followee_id` INT NOT NULL,
  `follower_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_follow_user1`
    FOREIGN KEY (`followee_id`)
    REFERENCES `pocogram`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_follow_user2`
    FOREIGN KEY (`follower_id`)
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


-- -----------------------------------------------------
-- Table `pocogram`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `pocogram`.`participant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`participant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_participant_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `pocogram`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_participant_room1`
    FOREIGN KEY (`room_id`)
    REFERENCES `pocogram`.`room` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `pocogram`.`msg`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocogram`.`msg` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(1000) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `participant_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_msg_participant1`
    FOREIGN KEY (`participant_id`)
    REFERENCES `pocogram`.`participant` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);




-- ##############################################################################
--                                데이터 추가 샘플
-- ##############################################################################


-- user
INSERT INTO user (userID,userPW,name) VALUES 
  ('user1','1234','유저1'),
  ('user2','1234','유저2'),
  ('user3','1234','유저3'),
  ('user4','1234','유저4');


-- post
INSERT INTO post (user_id, content, createdAt,updatedAt) VALUES 
  (1,'내용1',NOW(),NOW()),
  (2,'내용2',NOW(),NOW()),
  (3,'내용3',NOW(),NOW()),
  (4,'내용4',NOW(),NOW());


-- comment
INSERT INTO comment (user_id,post_id,content,createdAt,updatedAt) VALUES 
  (1,1,'댓글 내용1',NOW(),NOW()),
  (2,2,'댓글 내용2',NOW(),NOW()),
  (3,3,'댓글 내용3',NOW(),NOW()),
  (4,4,'댓글 내용4',NOW(),NOW()),
  (4,1,'댓글 내용5',NOW(),NOW());


-- likes
INSERT INTO likes (user_id,post_id) VALUES 
  (1,1),
  (2,1),
  (3,1),
  (4,1),
  (4,2),
  (3,2),
  (2,2),
  (2,3);
  

-- follow
INSERT INTO follow (followee_id,follower_id) VALUES 
  (1,2),
  (2,1),
  (3,1);


-- room
INSERT INTO room (id) VALUES (1),(2),(3);


-- participant
INSERT INTO participant (user_id, room_id) VALUES
  (1,1),
  (1,2),
  (2,1),
  (2,2);


-- msg
INSERT INTO msg (content,createdAt,updatedAt,participant_id) VALUES
  ('하이1',NOW(),NOW(),1),
  ('하이2',NOW(),NOW(),2),
  ('하이3',NOW(),NOW(),3),
  ('하이4',NOW(),NOW(),4);


  
-- join
-- post,comment
SELECT
	post.id,
	comment.id as comment_id,
	comment.user_id as comment_user_id,
	comment.content as comment_content
FROM post
LEFT JOIN comment
	ON post.id=comment.post_id
ORDER BY post.id;



-- post,like
SELECT
	post.id,
	likes.id as likes_id,
	likes.user_id as likes_user_id
	FROM post
INNER JOIN likes
	ON post.id=likes.post_id
WHERE post.id=1;



-- post,comment,like
SELECT post.id, comment.id, comment.user_id, comment.content, likes.id, likes.user_id
from post
join comment on post.id=comment.post_id
join likes on post.id=likes.post_id;
