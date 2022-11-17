// function join() {
//   const form = document.forms["information"];

//   const data = {
//     email: information.userid.value,
//     userName: information.userName.value,
//     birthday: information.birthday.value,
//     pw: information.pw.value,
//     pwCheck: information.pwCheck.value,
//   };
// }

document.querySelector(".closeEyePw").addEventListener("click", function () {
  const password = document.querySelector("#pw");
  const closeEyePw = document.querySelector(".closeEyePw");
  if (password.getAttribute("type") === "password") {
    closeEyePw.setAttribute("src", "../static/image/eye.svg");
    password.setAttribute("type", "text");
  } else {
    closeEyePw.setAttribute("src", "../static/image/eye-slash.svg");
    password.setAttribute("type", "password");
  }
});

document
  .querySelector(".closeEyePwCheck")
  .addEventListener("click", function () {
    const password = document.querySelector("#pwCheck");
    const closeEyePw = document.querySelector(".closeEyePwCheck");
    if (password.getAttribute("type") === "password") {
      closeEyePw.setAttribute("src", "../static/image/eye.svg");
      password.setAttribute("type", "text");
    } else {
      closeEyePw.setAttribute("src", "../static/image/eye-slash.svg");
      password.setAttribute("type", "password");
    }
  });
