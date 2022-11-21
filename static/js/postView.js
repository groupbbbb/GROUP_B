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
    console.log(id);
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
    const form = document.forms[`edit-form${id}`];
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
function editDo(obj, id) {
    const form = document.forms[`edit-form${id}`];
    axios({
        method: 'POST',
        url: '/post/edit',
        data: { id : id, content : form.content.value }
    }).then((res) => {
        return res.data;
    })
}

// 수정 취소
function editCancel(obj, id) {
    const form = document.forms[`edit-form${id}`];
    form.classList.toggle('display-none');
}
