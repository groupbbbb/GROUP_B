const slideBoxAll = document.querySelectorAll(".slideBox");
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");

const imageAll = [];
for (let i = 0; i < slideBoxAll.length; i++) {
  imageAll.push(
    Array.from(slideBoxAll[i].children).slice(
      0,
      slideBoxAll[i].children.length - 2
    )
  );
}

const currentIndexs = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const nextIndexs = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
};

function buttonClick(cardIdx, arrow) {
  if (arrow > 0) {
    imageAll[cardIdx][currentIndexs[cardIdx]].style.display = "none";
    imageAll[cardIdx][nextIndexs[cardIdx]].style.display = "block";
    prevBtn[cardIdx].style.display="block"
    if (nextIndexs[cardIdx] === imageAll[cardIdx].length - 1) {
      nextBtn[cardIdx].style.display = "none";
    } else {
      prevBtn[cardIdx].style.display = "block";
    }

    currentIndexs[cardIdx]++;
    nextIndexs[cardIdx]++;
  } else {
    currentIndexs[cardIdx]--;
    nextIndexs[cardIdx]--;

    if (currentIndexs[cardIdx] === 0) {
      prevBtn[cardIdx].style.display = "none";
    } else {
      nextBtn[cardIdx].style.display = "block";
    }

    imageAll[cardIdx][currentIndexs[cardIdx]].style.display = "block";
    imageAll[cardIdx][nextIndexs[cardIdx]].style.display = "none";
  }
}

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", function () {
    buttonClick(i, 1);
  });
}

for (let z = 0; z < prevBtn.length; z++) {
  prevBtn[z].addEventListener("click", function () {
    buttonClick(z, -1);
  });
}

// 슬라이드 확대 취소 버튼 기능
const searchAll = document.querySelectorAll(".search");
const closeAll = document.querySelectorAll(".close");
const hiddenBox = document.querySelectorAll(".hiddenBox");
const box = document.querySelectorAll(".box");
const contentBox = document.querySelectorAll(".contentBox");
const card = document.querySelectorAll(".card");
const body = document.querySelector("body");

for (let k = 0; k < hiddenBox.length; k++) {
  searchAll[k].addEventListener("click", function () {
    hiddenBox[k].style.display = "block";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.66)";
  });
}

for (let l = 0; l < box.length; l++) {
  closeAll[l].addEventListener("click", () => {
    for (let j = 0; j < box.length; j++) hiddenBox[j].style.display = "none";
    card[l].style.display = "block";
    body.style.backgroundColor = "transparent";
  });
}

for (let i = 0; i < hiddenBox.length; i++) {
  searchAll[i].addEventListener("click", function () {
    card[i].style.display = "none";
  });
}

// 확대 슬라이드 좋아요한 유저 보기
const userListsAll = document.querySelectorAll(".userLists");
const likeUsersAll = document.querySelectorAll(".likeUsers");

for (let i = 0; i < hiddenBox.length; i++) {
  likeUsersAll[i].addEventListener("click", function () {
    console.log(userListsAll);
    userListsAll[i].classList.toggle("active");
  });
}

// 확대 슬라이드
const halfImgAll = document.querySelectorAll(".halfImg"); // 5
const hiddenNext = document.querySelectorAll(".hiddenNext"); // 5
const hiddenPrev = document.querySelectorAll(".hiddenPrev"); // 5

const hiddenImageAll=[];
for(let i=0;i<halfImgAll.length;i++){
  hiddenImageAll.push(Array.from(halfImgAll[i].children).slice(0,halfImgAll[i].children.length - 2))
}

const currentHiddenIndexs = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const nextHiddenIndexs = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
};

function slideButtonClick(cardIdx, arrow) {
  if (arrow > 0) {
    halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]].style.display = "none";
    halfImgAll[cardIdx][nextHiddenIndexs[cardIdx]].style.display = "block";
    if (nextHiddenIndexs[cardIdx] === halfImgAll[cardIdx].length - 1) {
      hiddenNext[cardIdx].style.display = "none";
    } else {
      hiddenPrev[cardIdx].style.display = "block";
    }

    currentHiddenIndexs[cardIdx]++;
    nextHiddenIndexs[cardIdx]++;
  } else {
    currentHiddenIndexs[cardIdx]--;
    nextHiddenIndexs[cardIdx]--;

    if (currentHiddenIndexs[cardIdx] === 0) {
      hiddenPrev[cardIdx].style.display = "none";
    } else {
      hiddenNext[cardIdx].style.display = "block";
    }

    halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]].style.display = "block";
    halfImgAll[cardIdx][nextHiddenIndexs[cardIdx]].style.display = "none";
  }
}

for (let i = 0; i < hiddenNext.length; i++) {
  hiddenNext[i].addEventListener("click", function () {
    slideButtonClick(i, 1);
  });
}

for (let z = 0; z < hiddenPrev.length; z++) {
  hiddenPrev[z].addEventListener("click", function () {
    slideButtonClick(z, -1);
  });
}



// function mypage() {
//   function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//       results = regex.exec(location.search);
//     return results == null
//       ? ""
//       : decodeURIComponent(results[1].replace(/\+/g, " "));
//   }
//   var id = getParameterByName("id");

//   axios({
//     method: "POST",
//     url: "/user/mypage",
//     data: {
//       id,
//     },
//   }).then((data) => {
//     document.location.href = `/user/mypage?isLogin=${data.data.isLogin}?id=${data.data.id}`;
//   });
// }


// =========================================  포스트  =========================================

// 선택 포스트 보기
function viewThisPost(obj, id) {
    axios({
        method: 'POST',
        url: '/post/viewThis',
        data: { id: id },
    }).then((res) => {
        return res.data;
    }).then((data) => {
        console.log(data);
    });
}

// 포스트 삭제
async function deletePost(obj, id){
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThis',
            data: { id: id },
        }).then((res) => {
            return res.data;
        })

    axios({
        method: 'POST',
        url: '/post/delete',
        data: { id: id, user_id : data.user_id },
    }).then((res) => {
        return res.data;
    }).then((res)=>{
        // console.log(res);
        alert(res);
        location.reload();
        location.replace(location.href);
        location.href = location.href;
    })
}

// 수정할 포스트 선택
const editPostSelected = {};
let formName;
async function editPost(obj, id, isHidden){
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThis',
            data: { id: id },
        }).then((res) => {
            if(isHidden){
                formName='editPost-form'+id.toString();
            }else{
                formName='editPost-form-hidden'+id.toString();
            }
            return res.data;
        })
    axios({
        method: 'POST',
        url: '/post/editSessionCheck',
        data: { user_id : data.user_id },
    }).then((res) => {
        return res.data;
    }).then((res)=>{
        if(res===true){
            const form = document.forms[formName];
            form.classList.toggle('display-none');
            form.content.value=data.content;
            editPostSelected.post_id=data.id;
            editPostSelected.user_id=data.user_id;
        }else{
            console.log(res);
        }
    })
}

// 수정 확인
async function editPostDo(obj, id, isHidden) {
    const form = document.forms[formName];
    axios({
        method: 'POST',
        url: '/post/edit',
        data: { 
            id : id, 
            user_id : editPostSelected.user_id, 
            content : form.content.value, 
        }
    }).then((res) => {
        return res.data;
    }).then((res)=>{
        // console.log(res);
        alert(res);
        location.reload();
        location.replace(location.href);
        location.href = location.href;
        editPostSelected.post_id="";
        editPostSelected.user_id="";
    })
    location.reload();
    location.replace(location.href);
    location.href = location.href;
}

// 수정 취소
function editPostCancel(obj, id) {
    const form = document.forms[`editPost-form${id}`];
    form.classList.toggle('display-none');
    editPostSelected.post_id="";
    editPostSelected.user_id="";
}



// =========================================  댓글  =========================================

// 선택 포스트 댓글보기
async function viewComment(obj, id){
    const form = document.forms[`uploadComment-form${id}`];
    form.classList.toggle('display-none');
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewComment',
            data: { id : id },
        }).then((res) => {
            return res.data;
        })
        let str=""
        for(let i=0; i<data.length; i++){
            str+=`작성자 : ${data[i].user.userID}, 내용 : ${data[i].content} <br>등록시간 : ${data[i].createdAt}, 수정시간 : ${data[i].updatedAt}<br>
            <button type="button" onclick="deleteComment(this, ${data[i].id})">댓글 삭제</button>
            <button type="button" onclick="editComment(this, ${data[i].id})">댓글 수정</button><br>`;
        }
        document.querySelector(`.comment-list${id}`).innerHTML=str;
}

// 댓글 달기
function uploadComment(obj, id, isHidden){
    if(isHidden){
        const form = document.forms[`uploadComment-form${id}`];
        axios({
            method: 'POST',
            url : '/post/uploadComment',
            data : {
                content : form.content.value,
                post_id : id,
            }
        }).then((res)=>{
          alert(res.data);
          location.reload();
          location.replace(location.href);
          location.href = location.href;
          // console.log(res.data);
        })
    }else{
        const form = document.forms[`uploadComment-form-hidden${id}`];
        axios({
            method: 'POST',
            url : '/post/uploadComment',
            data : {
                content : form.content.value,
                post_id : id,
            }
        }).then((res)=>{
            // console.log(res.data);
            alert(res.data);
            location.reload();
            location.replace(location.href);
            location.href = location.href;
        })
    }
}

// 선택 댓글 삭제
async function deleteComment(obj, id){
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThisComment',
            data: { id: id },
        }).then((res) => {
            return res.data;
        })
    axios({
        method: 'POST',
        url: '/post/deleteComment',
        data: { id: id, user_id : data.user_id },
    }).then((res) => {
        // console.log(res.data);
        alert(res.data);
        location.reload();
        location.replace(location.href);
        location.href = location.href;
    });
}

// 수정할 댓글 선택
async function editComment(obj, post_id, comment_id) {
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThisComment',
            data: { id: comment_id },
        }).then((res) => {
            return res.data;
        })
    const form = document.forms[`editComment-form${post_id}${comment_id}`];
    if (form.classList.contains('display-none')) {
        form.classList.toggle('display-none');
    }
    form.content.value = data.content;
}

// 수정 확인
function commentEditDo(obj, post_id, comment_id) {
    const form = document.forms[`editComment-form${post_id}${comment_id}`];
    axios({
        method: 'POST',
        url: '/post/editComment',
        data: { 
            id : comment_id,
            content : form.content.value }
    }).then((res) => {
        return res.data;
    }).then((res)=>{
        // console.log(res);
        alert(res);
        location.reload();
        location.replace(location.href);
        location.href = location.href;
    })
}

// 수정 취소
function commentEditCancel(obj, post_id, comment_id) {
    const form = document.forms[`editComment-form${post_id}${comment_id}`];
    form.classList.toggle('display-none');
}


// =========================================  좋아요  =========================================

// 좋아요 조회
async function viewThisLike(obj, id) {
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThisLike',
            data: { id: id },
        }).then((res) => {
            return res.data;
        });
    console.log(data);
}

// 선택 게시글 좋아요 했는지 조회
// -> 했으면 : 좋아요 취소
// -> 안했으면 : 좋아요 하기
async function like(obj, id){
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThisLiked',
            data: { id: id },
        }).then((res) => {
            return res.data;
        });
    if(data=='로그인 하세요'){
        console.log(data);
        alert(data);
    }else if(data){
        // console.log('좋아요 기록이 있어서 좋아요를 취소합니다.');
        axios({
            method: 'POST',
            url: '/post/removeLike',
            data: { id: id },
        }).then((res) => {
            // console.log(res.data);
        })
    } else {
        // console.log('좋아요 기록이 없어서 좋아요를 진행합니다.');
        axios({
            method: 'POST',
            url: '/post/addLike',
            data: { id: id },
        }).then((res) => {
            // console.log(res.data);
        })
    }
}

async function viewLikes(obj, id){
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThisLike',
            data: { id: id },
        }).then((res) => {
            return res.data;
        });
    let likedPeople = document.querySelector(`.likedPeople${id}`);
    let html=''
    for(let i=0; i<data.likes.length;i++){
        html+=`<div>${data.likes[i].user.userID}</div>`;
    }
    likedPeople.innerHTML=html;
    likedPeople.classList.toggle('display-none');
    
}


let heart = document.querySelectorAll(".heart-icon");
let heartHidden = document.querySelectorAll(".heart-icon-hidden");
let heartNum = document.querySelectorAll(".heart-num");
let heartNumHidden = document.querySelectorAll(".heart-num-hidden");


for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    heart[i].classList.toggle("bi-heart");
    heart[i].classList.toggle("bi-heart-fill");
    heartHidden[i].classList.toggle("bi-heart");
    heartHidden[i].classList.toggle("bi-heart-fill");
    if(heart[i].classList.contains('bi-heart')){
        heartNum[i].innerText=Number(heartNum[i].innerText)-1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)-1;
    }else{
        heartNum[i].innerText=Number(heartNum[i].innerText)+1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)+1;
    }
  });
}


for (let i = 0; i < heart.length; i++) {
    heartHidden[i].addEventListener("click", () => {
      heart[i].classList.toggle("bi-heart");
      heart[i].classList.toggle("bi-heart-fill");
      heartHidden[i].classList.toggle("bi-heart");
      heartHidden[i].classList.toggle("bi-heart-fill");
      if(heart[i].classList.contains('bi-heart')){
        heartNum[i].innerText=Number(heartNum[i].innerText)-1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)-1;
    }else{
        heartNum[i].innerText=Number(heartNum[i].innerText)+1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)+1;
    }
    });
  }
  