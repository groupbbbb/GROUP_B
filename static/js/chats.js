let popup = document.querySelector(".popup");
let radioBtns = document.querySelector(".radioBtns");
let addMessageTopSend = document.querySelector(".addMessageTopSend");

document.querySelector(".messageAddImg").addEventListener("click", function () {
  popup.classList.remove("hidden");
  radioBtns.addEventListener("click", function () {
    if (radioBtns.checked == true) {
      addMessageTopSend.style.color = "#0095F7";
      addMessageTopSend.style.cursor = "pointer";
      addMessageTopSend.disabled = false;
    } else {
      addMessageTopSend.disabled = true;
    }
  });
});

document.querySelector(".sendBtn").addEventListener("click", function () {
  popup.classList.remove("hidden");
});

document.querySelector(".close").addEventListener("click", function () {
  popup.classList.add("hidden");
});

// const events = require("events");
// const eventEmitter = new events.EventEmitter();
const useridSearch = document.querySelector("#useridSearch");

useridSearch.addEventListener("input", function () {
  // input : 입력창에 변경이 일어나는 순간을 계속 감지

  console.log("input 입력값", useridSearch.value);
  axios({
    method: "POST",
    url: "/chat/search",
    data: {
      userID: useridSearch.value,
    },
  })
    .then((res) => {
      console.log("front에성 res 확인 >> ", res);
    })
    .then((data) => {
      console.log("data 값 출력 보기 >> ", data);
    });
});

// let radioBtns = document.querySelector(".radioBtns");
// radioBtns.addEventListener("click", function (event) {
//   if (radioBtns.checked == true) {
//     console.log("hi");
//   }
// });
