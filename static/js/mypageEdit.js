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
//======로그아웃======
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
//======user 정보가져오기======
let profileImg = document.querySelector('#profileImg'); 
let userID = document.querySelector('#userID');
let userPW = document.querySelector('#userPW'); 
let userName = document.querySelector('#name');
let userNameHidden = document.querySelector('#nameHidden');
let birth = document.querySelector('#birth');
let birthHidden = document.querySelector('#birthHidden');
function myInform() {
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var isLogin = getParameterByName('isLogin');
  axios({
    method: 'POST',
    url: '/user/getMyInform',
    data: {
      isLogin
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
    userNameHidden.value = data.data.name;
    birth.value = data.data.birth;
    birthHidden.value = data.data.birth;
  });
}

//======user 정보 수정======
function nameChange() {
  document.querySelector('.modifyInformBtn').disabled = false;
}
function birthChange() {
  document.querySelector('.modifyInformBtn').disabled = false;
}
const informForm = document.forms['informForm'];
function modifyInform() {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var isLogin = getParameterByName('isLogin');

  if (!informForm.checkValidity()) {
    informForm.reportValidity();
    return;
  }
  if (userNameHidden.value===informForm.name.value && birthHidden.value===informForm.birth.value) {
    document.querySelector('.modifyInformBtn').disabled = true;
    document.querySelector('.modifyInformBtn').disabled = true;
    return;
  }
    axios({
      method: 'POST',
      url: '/user/modifyUserInform',
      data: {
        isLogin: isLogin,
        name: informForm.name.value,
        birth: informForm.birth.value,
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

//======user 사진 수정======
function fileUpload() {
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var isLogin = getParameterByName('isLogin');

const formData = new FormData();
const file = document.getElementById('profileUpload'); 
formData.append('profileUpload', file.files[0]);
formData.append('isLogin', isLogin);

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
//======user 비밀번호 수정======
let pwChecking = document.querySelector('#newPW_check');
const modifyPW_form = document.forms['modifyPW_form'];
pwChecking.onblur = function () {
    const pwMsg= document.querySelector('#pwMsg');
    if (modifyPW_form.newPW.value !== modifyPW_form.newPW_check.value) {
      pwMsg.innerHTML = '비밀번호가 일치하지않습니다.';
      pwMsg.style.color = 'red';
      return;
    } else {
      pwMsg.innerHTML = ''
      pwMsg.style.color = '';
    }
}
function modifyPW() {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var isLogin = getParameterByName('isLogin');
  
  if (!modifyPW_form.checkValidity()) {
    modifyPW_form.reportValidity();
    return;
  }
  
if (modifyPW_form.newPW.value !== modifyPW_form.newPW_check.value) {
  pwMsg.innerHTML = '비밀번호가 일치하지않습니다.';
  pwMsg.style.color = 'red';
  return;
} else {
  pwMsg.innerHTML = ''
  pwMsg.style.color = '';
}

if (pwMsg.style.color === 'red') {
  Swal.fire('비밀번호를 확인해주세요.');
  return;
} else  {
  axios({
    method: 'POST',
    url: '/user/modifyPW',
    data: {
      isLogin: isLogin,
      newPW: modifyPW_form.newPW.value,
    },
  }).then((data) => {
      Swal.fire({
        icon: 'success',
        title: '비밀번호를 변경했습니다.',
        showConfirmButton: false,
      })
      setTimeout(function () {
        signout();
      },1000);
    });
}
}

//============================================================================================
// 좋아요 목록 보기
async function myLike() {
  let data = await axios({
    method: 'POST',
    url: '/user/mylike',
  }).then((res) => {
      return res.data;
  }).then((res) => {
      return res.data;
  });
  console.log(data);

  // 내용 ${data[i].post.content}
  // 게시자 ${data[i].post.user.userID}
  // 좋아요 ${data[i].post.likes[j].user.userID}
  // 댓글단사람 ${data[i].post.comments[j].user.userID}
  // 댓글내용 ${data[i].post.comments[j].content}
}

// 내 게시글
async function myPost() {
  let data = await axios({
    method: 'POST',
    url: '/user/mypost',
  }).then((res) => {
    return res.data;
  }).then((res) => {
    return res.data;
  });
  console.log(data);

  // 내용 ${data[i].content
  // 좋아요 ${data[i].likes.length}
  // 댓글단사람 ${data[i].comments[j].user.userID}
  // 댓글내용 ${data[i].comments[j].content}

}

const postMoreButton = document.querySelectorAll(".post-content-more");
const postMore = document.querySelectorAll('.post-more');
for (let i = 0; i < postMore.length; i++) {
  postMoreButton[i].addEventListener("click", function () {
    postMore[i].classList.toggle('display-none');
  });
}

function deletePost(obj, id){
  axios({
      method: 'POST',
      url: '/user/deleteMyPost',
      data: { id: id },
  }).then((res) => {
      return res.data;
  }).then((res)=>{
      alert(res);
      // location.reload();
      // location.replace(location.href);
      // location.href = location.href;
  })
}

function editPost(obj, id){
  const form = document.forms[`post-edit-form${id}`];
  axios({
      method: 'POST',
      url: '/user/editMyPost',
      data: { id: id, content:form.postContent.value },
  }).then((res) => {
      return res.data;
  }).then((res)=>{
      alert(res);
  })
}