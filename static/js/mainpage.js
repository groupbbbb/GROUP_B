const searchAll = document.querySelectorAll(".search");
const closeAll = document.querySelectorAll(".close");
const hiddenBox = document.querySelectorAll(".hiddenBox");
const box = document.querySelectorAll(".box");
const contentBox = document.querySelectorAll(".contentBox");

for (let k = 0; k < hiddenBox.length; k++) {
  searchAll[k].addEventListener("click", function () {
    hiddenBox[k].style.display = "block";
  });
}

for (let l = 0; l < box.length; l++) {
  closeAll[l].addEventListener("click", () => {
    for (let j = 0; j < box.length; j++) hiddenBox[j].style.display = "none";
  });
}


// =========================================  포스트  =========================================

// const { default: axios } = require("axios");

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
        console.log(res);
    })
}

// 수정할 포스트 선택
const editPostSelected = {};
async function editPost(obj, id){
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
        url: '/post/editSessionCheck',
        data: { user_id : data.user_id },
    }).then((res) => {
        return res.data;
    }).then((res)=>{
        if(res===true){
            const form = document.forms[`editPost-form${id}`];
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
function editPostDo(obj, id) {
    const form = document.forms[`editPost-form${id}`];
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
        console.log(res);
        editPostSelected.post_id="";
        editPostSelected.user_id="";
    })
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
function uploadComment(obj, id){
    const form = document.forms[`uploadComment-form${id}`];
    axios({
        method: 'POST',
        url : '/post/uploadComment',
        data : {
            content : form.content.value,
            post_id : id,
        }
    }).then((res)=>{
        console.log(res.data);
    })
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
        console.log(res.data);
    });
}

// 수정할 댓글 선택
const editCommentSelected = {};
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
    console.log(data);
    if (form.classList.contains('display-none')) {
        form.classList.toggle('display-none');
    }
    form.content.value = data.content;
    // editCommentSelected.id = data.id;
    // editCommentSelected.post_id = data.post_id;
    // editCommentSelected.user_id = data.user_id;


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
        console.log(res);
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
    }else if(data){
        console.log('좋아요 기록이 있어서 좋아요를 취소합니다.');
        axios({
            method: 'POST',
            url: '/post/removeLike',
            data: { id: id },
        }).then((res) => {
            console.log(res.data);
        })
    }else{
        console.log('좋아요 기록이 없어서 좋아요를 진행합니다.');
        axios({
            method: 'POST',
            url: '/post/addLike',
            data: { id: id },
        }).then((res) => {
            console.log(res.data);
        })
    }
    // document.querySelector(`.heart-icon${id}`).classList.toggle('heart-color');
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
