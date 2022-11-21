// 선택 포스트 보기
function viewThis(obj, id) {
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

// 선택 포스트 삭제
function deleteThis(obj, id){
    axios({
        method: 'POST',
        url: '/post/delete',
        data: { id: id },
    }).then((res) => {
        return res.data;
    });
}

// 수정할 포스트 선택
async function editThis(obj, id){
    const form = document.forms[`editPost-form${id}`];
    form.classList.toggle('display-none');
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThis',
            data: { id: id },
        }).then((res) => {
            return res.data;
        })
    form.content.value=data.content;
}

// 수정 확인
function postEditDo(obj, id) {
    const form = document.forms[`editPost-form${id}`];
    axios({
        method: 'POST',
        url: '/post/edit',
        data: { id : id, content : form.content.value }
    }).then((res) => {
        return res.data;
    })
}

// 수정 취소
function postEditCancel(obj, id) {
    const form = document.forms[`editPost-form${id}`];
    form.classList.toggle('display-none');
}

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
            str+=`작성자 : ${data[i].user_id} // 내용 : ${data[i].content} // 등록시간 : ${data[i].createdAt}<br>
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
            user_id : Number(form.id.value),
        }
    }).then(function(res){
    })
}

// 선택 댓글 삭제
function deleteComment(obj, id){
    const form = document.forms[`editComment-form${id}`];
    let data =
    axios({
        method: 'POST',
        url: '/post/deleteComment',
        data: { id: id },
    }).then((res) => {
        return res.data;
    });
}

// 댓글 한개 선택
async function editComment(obj, id){
    const form = document.forms[`editComment-form${id}`];
    form.classList.toggle('display-none');
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThisComment',
            data: { id: id },
        }).then((res) => {
            return res.data;
        })
    form.content.value=data.content;
}

// 수정 확인
// function commentEditDo(obj, id) {
//     const form = document.forms[`editPost-form${id}`];
//     axios({
//         method: 'POST',
//         url: '/post/editComment',
//         data: { id : id, content : form.content.value }
//     }).then((res) => {
//         return res.data;
//     })
// }

// 수정 취소
// function commentEditCancel(obj, id) {
//     const form = document.forms[`editPost-form${id}`];
//     form.classList.toggle('display-none');
// }