// let oEditors = []

// smartEditor = function () {
//     console.log("Naver SmartEditor")
//     nhn.husky.EZCreator.createInIFrame({
//         oAppRef: oEditors,
//         elPlaceHolder: "editorTxt",
//         sSkinURI: "/static/smarteditor/SmartEditor2Skin.html",
//         fCreator: "createSEditor2"
//     })
// }

// $(document).ready(function () {
//     smartEditor()
// })

// submitPost = function () {
//     oEditors.getById["editorTxt"].exec("UPDATE_CONTENTS_FIELD", [])
//     let content = document.getElementById("editorTxt").value

//     if (content == '') {
//         alert("내용을 입력해주세요.")
//         oEditors.getById["editorTxt"].exec("FOCUS")
//         return
//     }else {
//         console.log(content)
//     }
// } 



// function upload() {
//     const form = document.forms['form_upload'];
//     axios({
//         method: 'POST',
//         url: '/post/postUpload',
//         data: {
//             user_id: Number(form.user_id.value),
//             content: form.content.value,
//             img: form.img.file,
//         },
//     })
//         .then((res) => {
//             return res.data;
//         })
//         .then((data) => {
//             // document.location.href = '/user/signin';
//         });
// }


function upload(){
    const formData = new FormData();                        // 폼 객체 생성
    const file = document.getElementById('img');    // file input

    const form = document.forms['form_upload'];

    // input의 name과 input에 value 
    // formData.append('img',new Blob([file.files[0]],{type:"image/jpg"}));  

    formData.append('img',file.files[0]);  
    formData.append('user_id',Number(form.user_id.value));
    formData.append('content',form.content.value);

    console.log(formData.get('img'));
    console.log(formData.get('user_id'));
    console.log(formData.get('content'));

    // axios 통신
    axios({
        method: 'POST',
        url : '/post/postUpload',
        data : formData,
        headers: {
            'Content-Type' : 'multipart/form-data',
        }
    }).then(function(res){
        console.log(res);
        console.log(res.data);
        console.log(res.data.img.path);
        // document.querySelector('img').src=res.data.path;
    })
}