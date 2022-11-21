// 선택 포스트 보기
function viewThis(obj, id) {
    axios({
        method: 'POST',
        url: '/post/viewOne',
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

// 선택 포스트 수정
function EditThis(obj, id){
    document.querySelector('.edit-content').toggle('display-none');
}