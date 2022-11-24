document.querySelector(".closeEyePw").addEventListener("click", function () {
  const password = document.querySelector("#pw");
  const closeEyePw = document.querySelector(".closeEyePw");
  if (password.getAttribute("type") === "password") {
    closeEyePw.setAttribute("src", "/static/img/eye.svg");
    password.setAttribute("type", "text");
  } else {
    closeEyePw.setAttribute("src", "/static/img/eye-slash.svg");
    password.setAttribute("type", "password");
  }
});

document
  .querySelector(".closeEyePwCheck")
  .addEventListener("click", function () {
    const password = document.querySelector("#pwCheck");
    const closeEyePw = document.querySelector(".closeEyePwCheck");
    if (password.getAttribute("type") === "password") {
      closeEyePw.setAttribute("src", "/static/img/eye.svg");
      password.setAttribute("type", "text");
    } else {
      closeEyePw.setAttribute("src", "/static/img/eye-slash.svg");
      password.setAttribute("type", "password");
    }
  });
//======아이디중복체크======
  const overlapChecking = document.querySelector('#userID');
  overlapChecking.onblur = function () {
    const form = document.forms['information'];
    const idMsg = document.querySelector('#idMsg');
    idMsg.innerHTML = '';

    axios({
      method: 'POST',
      url: '/user/idCheck',
      data: {
        userID: form.userID.value,
      },
    }).then((data) => {

      if(data.data){
        idMsg.innerHTML = '사용 가능한 아이디 입니다.';
        idMsg.style.color = 'green';
      }else{
        idMsg.innerHTML = '중복된 아이디 입니다.';
        idMsg.style.color = 'red';
      }
      });
  }
  //======비밀번호체크======
let pwChecking = document.querySelector('#pwCheck');
const form = document.forms['information'];
pwChecking.onblur = function () {
    const pwMsg= document.querySelector('#pwMsg');
    if (form.userPW.value !== form.pwCheck.value) {
      pwMsg.innerHTML = '비밀번호가 일치하지않습니다.';
      pwMsg.style.color = 'red';
      return;
    } else {
      pwMsg.innerHTML = ''
    }
}
  function join() {
    const form = document.forms['information'];
    const idMsg = document.querySelector('#idMsg');
    const pwMsg= document.querySelector('#pwMsg');
    if (form.userPW.value !== form.pwCheck.value) {
      pwMsg.innerHTML = '비밀번호가 일치하지않습니다.';
      pwMsg.style.color = 'red';
      return;
    } else {
      pwMsg.innerHTML = ''
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (idMsg.style.color === 'red') {
      Swal.fire('아이디를 확인해주세요.')
      idFocus2();
    } else if (idMsg.style.color ==='green') {
      axios({
        method: 'POST',
        url: '/user/signup',
        data: {
          userID: form.userID.value,
          userPW: form.userPW.value,
          name: form.name.value,
          birth: form.birth.value,
        },
      })
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          Swal.fire({
            icon: 'success',
            title: '회원가입에 성공했습니다.',
            showConfirmButton: false,
          })
          setTimeout("location.href='/user/signin'",1000)
        });
      } else {
        idFocus();
         
    }
  }
  function idFocus() {
      document.getElementById('userID').focus();
      idMsg.innerHTML = '아이디 중복확인은 필수입니다.';
      idMsg.style.color = 'blue';
  }
  function idFocus2() {
    document.getElementById('userID').focus();
}