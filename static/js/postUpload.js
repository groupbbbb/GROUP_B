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





function upload(){
    const formData = new FormData();
    const file = document.getElementById('img');
    const form = document.forms['form_upload'];

    formData.append('img',file.files[0]);  
    formData.append('user_id',Number(form.user_id.value));
    formData.append('content',form.content.value);

    axios({
        method: 'POST',
        url : '/post/postUpload',
        data : formData,
        headers: {
            'Content-Type' : 'multipart/form-data',
        }
    }).then(function(res){
        // console.log(res);
    })
}