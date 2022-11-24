let popup = document.querySelector(".popup");
let userCheck = document.querySelector("userCheck");
let addMessageTopSend = document.querySelector(".addMessageTopSend");

document.querySelector(".messageAddImg").addEventListener("click", function () {
  popup.classList.remove("hidden");
  useridSearch.value = "";
  list.innerHTML = "";
});

document.querySelector(".sendBtn").addEventListener("click", function () {
  popup.classList.remove("hidden");
  useridSearch.value = "";
  list.innerHTML = "";
});

document.querySelector(".close").addEventListener("click", function () {
  popup.classList.add("hidden");
  useridSearch.value = "";
  list.innerHTML = "";
});

const useridSearch = document.querySelector("#useridSearch");
let list = document.querySelector(".list");

useridSearch.addEventListener("input", function () {
  list.innerHTML = "";
  if (useridSearch.value == "") return false;
  axios({
    method: "POST",
    url: "/chat/search",
    data: {
      userID: useridSearch.value,
    },
  }).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      let userList = document.createElement("div");
      let user = document.createElement("div");
      let userCheck = document.createElement("input");
      userCheck.setAttribute("type", "radio");
      userCheck.setAttribute("name", "userCheck");
      userCheck.setAttribute("value", `${res.data[i].userID}`);
      user.textContent = res.data[i].userID;
      userList.append(user, userCheck);
      userList.classList.add(`${res.data[i].userID}`);
      userList.style.display = "flex";
      userList.style.marginTop = "0.5rem";
      userList.style.justifyContent = "space-between";
      list.append(userList);
    }
    list.scrollTop = list.scrollHeight;

    let checkBtns = document.getElementsByName("userCheck");
    checkBtns.forEach((checkBtn) => {
      checkBtn.addEventListener("change", () => {
        if (checkBtn.checked == true) {
          addMessageTopSend.style.color = "#0095F7";
          addMessageTopSend.style.cursor = "pointer";
          addMessageTopSend.disabled = false;
          addMessageTopSend.addEventListener("click", function () {
            axios({
              method: "POST",
              url: "/chat/check",
              data: {
                checkID: checkBtn.value,
              },
            }).then((res) => {
              console.log(res.data.userID);
            });
          });
        } else {
          addMessageTopSend.disabled = true;
        }
      });
    });
  });
});
