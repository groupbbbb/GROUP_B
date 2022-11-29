# POCOGRAM
## 제작 목표
- 게시글을 업로드 하여 정보 공유 및 소통할 수 있는 웹 sns
<br>

## 서버 링크
- http://101.101.209.231:8080
<br>

## 설치 및 사용 방법
```
git clone https://github.com/groupbbbb/GROUP_B.git
npm install express express-session ejs sequelize sequelize-cli bcrypt multer mysql2
node app.js
```
<br>

## db 설계
![KakaoTalk_20221128_151002451](https://user-images.githubusercontent.com/56117742/204452924-371a12b5-2b83-4374-8297-7c383bb99a0d.png)
<br>

## 페이지설명
> #### *mainpage.ejs : 게시글이 나열 된 메인화면
> <img width="900" alt="메인페이지" src="https://user-images.githubusercontent.com/97078724/204448494-c0fc85f6-c407-44e8-a56b-f3f3eae9e46e.PNG">

> #### *mainpage.ejs : 게시물 자세히보기 및 댓글 좋아요 / 해당 게시글 수정 및 삭제
> <img width="900" alt="자세히보기" src="https://user-images.githubusercontent.com/97078724/204448484-d7065614-4cc1-4165-ab3f-bebe68bbd5ad.PNG">

> #### *postUpload.ejs : 게시물 업로드(단일/다중 사진 업로드 가능)
<img width="900" alt="파일업로드" src="https://user-images.githubusercontent.com/97078724/204455057-79bd74c3-65b1-4d4e-989d-8e1d50774a01.PNG">

> #### *signup.ejs : 회원가입
> <img width="900" alt="회원가입" src="https://user-images.githubusercontent.com/97078724/204448985-70510a97-6473-483e-b183-b4d10912c2a7.PNG">

> #### *signin.ejs : 로그인
> <img width="900" alt="로그인" src="https://user-images.githubusercontent.com/97078724/204448981-7660464f-1aad-4b65-bddc-d15232380d01.PNG">

> #### *.ejs : 사용자의 정보 수정 및 관리
> <img width="900" alt="logout" src="https://user-images.githubusercontent.com/97078724/204448488-80d871a7-6080-4c4d-b988-00280023a8cd.PNG">

> #### *mypage.ejs : 사용자가 올린 게시글 관리
> <img width="900" alt="게시글관리" src="https://user-images.githubusercontent.com/97078724/204448489-b43bdf5a-d386-4ab5-b966-f92a7a7d5ff0.PNG">

> #### *mypage.ejs : 사용자가 좋아요를 누른 게시글
> <img width="900" alt="좋아요보기" src="https://user-images.githubusercontent.com/97078724/204448486-7896a903-994d-4d24-9de1-df9d10a7deed.PNG">
