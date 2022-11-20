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


// =====================================================================

function getFormatDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month > 10 ? month : '0' + month; // 10이 넘지 않으면 앞에 0을 붙인다
    var day = date.getDate();
    day = day > 10 ? day : '0' + day; // 10이 넘지 않으면 앞에 0을 붙인다
    var hours = date.getHours();
    hours = hours > 10 ? hours : '0' + hours; // 10이 넘지 않으면 앞에 0을 붙인다
    var minutes = date.getMinutes();
    minutes = minutes > 10 ? minutes : '0' + minutes; // 10이 넘지 않으면 앞에 0을 붙인다
    var seconds = date.getSeconds();
    seconds = seconds > 10 ? seconds : '0' + seconds; // 10이 넘지 않으면 앞에 0을 붙인다

    // return year + '-' + month + '-' + day;
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} `
}


function upload() {
    const form = document.forms['form_upload'];
    // var date = getFormatDate(new Date()); // 오늘 날짜 지정
    
    const formData = new FormData();                        // 폼 객체 생성
    const file = document.getElementById('img');            // file input
    console.log('==============================');
    console.dir(file.files[0]); // file input에 들어간 파일 정보
    console.log('==============================');

    axios({
        method: 'POST',
        url: '/post/postUpload',
        data: {
            user_id: Number(form.user_id.value),
            content: form.content.value,
            img: file.files[0],
        },
    })
        .then((res) => {
            return res.data;
        })
        .then((data) => {

            // document.location.href = '/user/signin';
        });
}