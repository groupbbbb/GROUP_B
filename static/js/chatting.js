function fileUpload() {
  const formData = new FormData(); // 폼 객체 생성
  const file = document.getElementById("sendFile");

  formData.append("sendFile", file.files[0]);

  axios({
    method: "POST",
    url: "/sendFile",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data", // enctype
    },
  }).then(function (res) {
    document.querySelector("img").src = res.data.path;
  });
}

const socket = io();
const chatList = document.querySelector(".chattingList");
const chatInput = document.querySelector("#chatInput");
const sendBtn = document.querySelector("#send");
const displayContainer = document.querySelector(".displayContainer");
const wrapper = document.querySelector(".wrapper");

chatInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    send();
    chatInput.value = "";
  }
});

function send() {
  const param = {
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
}

sendBtn.addEventListener("click", (send) => {
  chatInput.value = "";
});

socket.on("chatting", (data) => {
  const { msg, time } = data;
  const item = new liModel(msg, time);
  item.makeLi();
  wrapper.scrollTo(0, wrapper.scrollHeight);
});

function liModel(msg, time) {
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(name.value === this.name ? "sent" : "received");
    const dom = `<span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}

let setting = document.querySelector(".setting");
let roomDelete = document.querySelector(".roomDelete");
setting.addEventListener("click", function () {
  roomDelete.classList.remove("hidden");
  document.body.addEventListener("click", function () {
    if (roomDelete.classList.contains("hidden") === true) {
      console.log("body click");
      roomDelete.classList.add("hidden");
    }
  });
});
