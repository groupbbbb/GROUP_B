const info = document.querySelector(".info");
const like = document.querySelector(".like");
const fix = document.querySelector(".fix");
const myInformation = document.querySelector(".myInformation");
const likeList = document.querySelector(".likeList");
const postEdit = document.querySelector(".postEdit");

info.addEventListener("click", function () {
  myInformation.style.display = "block";
  likeList.style.display = "none";
  postEdit.style.display = "none";
});

like.addEventListener("click", function () {
  likeList.style.display = "block";
  myInformation.style.display = "none";
  postEdit.style.display = "none";
});

fix.addEventListener("click", function () {
  postEdit.style.display = "block";
  likeList.style.display = "none";
  myInformation.style.display = "none";
});

function signout() {
  isLogin = document.querySelector('#isLogin').value;
axios({
  method: "POST",
  url: "/user/signout",
  data: {
    isLogin,
  },
}).then(() => {
  Swal.fire({
      icon: 'success',
      title: '로그아웃 되었습니다.',
      showConfirmButton: false,
    })
    setTimeout("location.href=`/?isLogin=${false}`",1000)
})
}
//user 정보가져오기
let profileImg = document.querySelector('#profileImg'); 
let userID = document.querySelector('#userID');
let userPW = document.querySelector('#userPW'); 
let userName = document.querySelector('#name'); 
let birth = document.querySelector('#birth');
function myinform() {
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var id = getParameterByName('id');

  axios({
    method: 'POST',
    url: '/user/getMyInform',
    data: {
        id
    },
  }).then((data) => {
    if (data.data.profile_img === null) {
        profileImg.setAttribute('src', "/static/img/profile_img.PNG");
      } else {
      profileImg.setAttribute('src', `/${data.data.profile_img}`);

    }
    userID.value = data.data.userID;
    userPW.value = data.data.userPW;
    userName.value = data.data.name;
    birth.value = data.data.birth;
  });
}

//user 정보 수정
function nameChange() {
  document.querySelector('.modifyInformBtn').disabled = false;
}
function birthChange() {
  document.querySelector('.modifyInformBtn').disabled = false;
}
const form = document.forms['informForm'];
function modify() {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName('id');
  axios({
    method: 'POST',
    url: '/user/modifyUserInform',
    data: {
      id: id,
      userPW: form.userPW.value,
      name: form.name.value,
      birth: form.birth.value,
    },
  }).then((data) => {
    if(data.data) {
      Swal.fire({
        icon: 'success',
        title: '수정되었습니다.',
        showConfirmButton: false,
      })
      setTimeout(function(){
        location.reload();
        },800);

    } else {
      alert('수정에 실패하였습니다.')
    }
    
    });
}
//user 사진 수정
function fileUpload() {
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var id = getParameterByName('id');

const formData = new FormData();
const file = document.getElementById('profileUpload'); 
formData.append('profileUpload', file.files[0]);
formData.append('id', id);

axios({
  method: 'POST',
  url: '/user/profileUpload',
  data:
      formData,
  headers: {
    'Content-Type' : 'multipart/form-data',
  },
}).then (function (data) {
  Swal.fire({
    icon: 'success',
    title: '사진 수정되었습니다.',
    showConfirmButton: false,
  })
  setTimeout(function(){
    location.reload();
    },800);
});

}
