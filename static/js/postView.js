// $(function() {
//     $(document).ready(function() {
//       $("#myBtn").click(function() {
//         $("#myModal").css({"display": "block"});});
//       $(".close").click(function() {
//         $("#myModal").css({"display": "none"});});
//       $("html").click(function(event) {
//         if (event.target.id === "myModal") {
//           $("#myModal").css({
//             "display": "none"
//           });}
//       });
//     });
//   })
  

function postViewOne(obj, id) {
    axios({
        method: 'POST',
        url: '/post/postViewOne',
        data: { id: id },
    }).then((res) => {
        return res.data;
    }).then((data) => {
        // document.querySelector('#modal-content').innerHTML=`
        //     <span class="close">×</span>
        //     <div>게시자 : ${data.user_id}</div>
        //     <div>게시일 : ${data.date}</div>
        //     <div>내용 : ${data.content}</div>`;
        console.log(data);
    });
}

