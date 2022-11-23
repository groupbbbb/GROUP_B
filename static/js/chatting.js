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
