function login() {
    const form_login = document.forms['signinForm'];

    if (!form_login.checkValidity()) {
      form_login.reportValidity();
      return;
    } else {
      axios({
        method: 'POST',
        url: '/user/signin',
        data: {
            userID: form_login.userID.value,
            userPW: form_login.userPW.value,
        },
      }).then((data) => {
          if (!data.data) {
            Swal.fire('아이디 또는 비밀번호를 잘못 입력했습니다.');
            form_login.reset();
          } else {
            document.location.href = `/?userID=${data.data.userID}?isLogin=${data.data.isLogin}`;
          }
        });
    }

  }