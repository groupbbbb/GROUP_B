
function upload(){
    const formData = new FormData();
    const file = document.getElementById('img');
    const form = document.forms['form_upload'];

    if(file.files[0]==null || form.content.value==""){
        alert('모든 값을 입력하세요');
    }else if(file.files.length>10){
        alert('10장 이하로 선택해주세요');
    }else{
        formData.append('content',form.content.value);
        for(let i=0;i<file.files.length;i++){
            formData.append('img',file.files[i]);
        }
        axios({
            method: 'POST',
            url : '/post/upload',
            data : formData,
            headers: {
                'Content-Type' : 'multipart/form-data',
            }
        }).then(function(res){
            // console.log(res.data);
            alert(res.data);
            document.location.href = '/';
        })

    }
}