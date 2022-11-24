
function upload(){
    const formData = new FormData();
    const file = document.getElementById('img');
    const form = document.forms['form_upload'];

    // formData.append('img',file.files[0]);
    // formData.append('img',file.files[1]);
    formData.append('content',form.content.value);
    for(let i=0;i<file.files.length;i++){
        formData.append('img',file.files[i]);
    }

    // if(file.files[0]){
    //     formData.append('img',file.files[0]);  
    // }
    // formData.append('content',form.content.value);

    axios({
        method: 'POST',
        url : '/post/upload',
        data : formData,
        headers: {
            'Content-Type' : 'multipart/form-data',
        }
    }).then(function(res){
        console.log(res.data);
    })
}