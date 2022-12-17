# POCOGRAM
게시글을 업로드 하여 정보 공유 및 소통할 수 있는 웹 sns<br>
<br><br>
## StartProject
```
git clone https://github.com/groupbbbb/GROUP_B.git
npm i
node app.js
```
## Link
http://101.101.209.231:8080<br>
<br>
## REST API, 페이지 설명
### 메인 페이지
- `GET /` - 모든 게시글 조회
### 자세히 보기
- `POST /post/viewThis` - 선택 게시글 자세히 보기
- 슬라이드
### 게시글
- __Multer__ 게시글 다중 업로드
- `POST post/upload` - 게시글 업로드
- `POST /post/delete` - 게시글 등록
- `POST /post/edit` - 게시글 삭제
### 댓글
- `POST /post/viewComment` - 댓글 조회
- `POST /post/uploadComment` - 댓글 등록
- `POST /post/deleteComment` - 댓글 삭제
- `POST /post/editComment` - 댓글 수정
### 좋아요
- `POST /post/viewLike` - 좋아요 조회
- `POST /post/addLike` - 좋아요 등록
- `POST /post/removeLike` - 좋아요 취소
### 회원가입, 로그인
- **bcrypt, hash, salt**를 사용한 비밀번호 암호화
- `POST /user/signup` - 회원가입
- `POST /user/idCheck` - 회원가입 시 아이디 중복 체크
- `POST /user/signin` - 로그인
### 마이페이지 - 유저 정보 관리
- `POST /user/getMyInform` - 사용자 정보 조회
- `POST /user/modifyUserInform` - 사용자 정보 수정
- `POST /user/profileUpload` - __multer__를 사용한 프로필 사진 업로드
### 마이페이지 - 게시글, 좋아요 관리
- `GET /user/mypage` - 세션id를 기준으로 해당 유저가 올린 게시글, 좋아요한 게시글 확인
- `POST /user/deleteMyPost`, `POST /user/editMyPost`, `POSt /user/deleteMyLike` - 해당 게시글 관리<br>
<br><br>
## db 설계
![KakaoTalk_20221128_151002451](https://user-images.githubusercontent.com/56117742/204452924-371a12b5-2b83-4374-8297-7c383bb99a0d.png)
   


<!--
주석
## 페이지설명
> #### *mainpage.ejs : 게시글이 나열 된 메인화면
> <img width="900" alt="메인페이지" src="https://user-images.githubusercontent.com/97078724/204448494-c0fc85f6-c407-44e8-a56b-f3f3eae9e46e.PNG">

> #### *mainpage.ejs : 게시물 자세히보기 및 댓글 좋아요 / 해당 게시글 수정 및 삭제
> <img width="900" alt="자세히보기" src="https://user-images.githubusercontent.com/97078724/204448484-d7065614-4cc1-4165-ab3f-bebe68bbd5ad.PNG">

> #### *postUpload.ejs : 게시물 업로드(단일/다중 사진 업로드 가능)
> <img width="900" alt="파일업로드" src="https://user-images.githubusercontent.com/97078724/204455057-79bd74c3-65b1-4d4e-989d-8e1d50774a01.PNG">

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
-->
