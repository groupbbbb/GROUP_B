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
    setTimeout("location.href=`/?isLogin=${false}`",1200)
})
}

let profileImg = document.querySelector('#profileImg'); 
let userID = document.querySelector('#userID');
let userPW = document.querySelector('#userPW'); 
let name = document.querySelector('#name'); 
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
    }
    userID.value = data.data.userID
    userPW.value = data.data.userPW
    name.value = data.data.name
    birth.value = data.data.birth
  })

}
