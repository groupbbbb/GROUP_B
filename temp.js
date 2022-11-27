const slideBoxAll = document.querySelectorAll(".slideBox");
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");

const imageAll = [];
for (let i = 0; i < slideBoxAll.length; i++) {
  imageAll.push(
    Array.from(slideBoxAll[i].children).slice(
      0,
      slideBoxAll[i].children.length - 2
    )
  );
}

const currentIndexs = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const nextIndexs = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
};

function buttonClick(cardIdx, arrow) {
  if (arrow > 0) {
    imageAll[cardIdx][currentIndexs[cardIdx]].style.display = "none";
    imageAll[cardIdx][nextIndexs[cardIdx]].style.display = "block";
    prevBtn[cardIdx].style.display="block"
    if (nextIndexs[cardIdx] === imageAll[cardIdx].length - 1) {
      nextBtn[cardIdx].style.display = "none";
    } else {
      prevBtn[cardIdx].style.display = "block";
    }

    currentIndexs[cardIdx]++;
    nextIndexs[cardIdx]++;
  } else {
    currentIndexs[cardIdx]--;
    nextIndexs[cardIdx]--;

    if (currentIndexs[cardIdx] === 0) {
      prevBtn[cardIdx].style.display = "none";
    } else {
      nextBtn[cardIdx].style.display = "block";
    }

    imageAll[cardIdx][currentIndexs[cardIdx]].style.display = "block";
    imageAll[cardIdx][nextIndexs[cardIdx]].style.display = "none";
  }
}

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", function () {
    buttonClick(i, 1);
  });
}

for (let z = 0; z < prevBtn.length; z++) {
  prevBtn[z].addEventListener("click", function () {
    buttonClick(z, -1);
  });
}

// 슬라이드 확대 취소 버튼 기능
const searchAll = document.querySelectorAll(".search");
const closeAll = document.querySelectorAll(".close");
const hiddenBox = document.querySelectorAll(".hiddenBox");
const box = document.querySelectorAll(".box");
const contentBox = document.querySelectorAll(".contentBox");
const card = document.querySelectorAll(".card");
const body = document.querySelector("body");

for (let k = 0; k < hiddenBox.length; k++) {
  searchAll[k].addEventListener("click", function () {
    hiddenBox[k].style.display = "block";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.66)";
  });
}

for (let l = 0; l < box.length; l++) {
  closeAll[l].addEventListener("click", () => {
    for (let j = 0; j < box.length; j++) hiddenBox[j].style.display = "none";
    card[l].style.display = "block";
    body.style.backgroundColor = "transparent";
  });
}

for (let i = 0; i < hiddenBox.length; i++) {
  searchAll[i].addEventListener("click", function () {
    card[i].style.display = "none";
  });
}

// 확대 슬라이드 좋아요한 유저 보기
const userListsAll = document.querySelectorAll(".userLists");
const likeUsersAll = document.querySelectorAll(".likeUsers");

for (let i = 0; i < hiddenBox.length; i++) {
  likeUsersAll[i].addEventListener("click", function () {
    console.log(userListsAll);
    userListsAll[i].classList.toggle("active");
  });
}

// 확대 슬라이드
const halfImgAll = document.querySelectorAll(".halfImg"); // 5
const hiddenNext = document.querySelectorAll(".hiddenNext"); // 5
const hiddenPrev = document.querySelectorAll(".hiddenPrev"); // 5

const hiddenImageAll=[];
for(let i=0;i<halfImgAll.length;i++){
  hiddenImageAll.push(Array.from(halfImgAll[i].children).slice(0,halfImgAll[i].children.length - 2))
}

const currentHiddenIndexs = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const nextHiddenIndexs = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
};

function slideButtonClick(cardIdx, arrow) {
  if (arrow > 0) {
    halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]].style.display = "none";
    halfImgAll[cardIdx][nextHiddenIndexs[cardIdx]].style.display = "block";
    if (nextHiddenIndexs[cardIdx] === halfImgAll[cardIdx].length - 1) {
      hiddenNext[cardIdx].style.display = "none";
    } else {
      hiddenPrev[cardIdx].style.display = "block";
    }

    currentHiddenIndexs[cardIdx]++;
    nextHiddenIndexs[cardIdx]++;
  } else {
    currentHiddenIndexs[cardIdx]--;
    nextHiddenIndexs[cardIdx]--;

    if (currentHiddenIndexs[cardIdx] === 0) {
      hiddenPrev[cardIdx].style.display = "none";
    } else {
      hiddenNext[cardIdx].style.display = "block";
    }

    halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]].style.display = "block";
    halfImgAll[cardIdx][nextHiddenIndexs[cardIdx]].style.display = "none";
  }
}

for (let i = 0; i < hiddenNext.length; i++) {
  hiddenNext[i].addEventListener("click", function () {
    slideButtonClick(i, 1);
  });
}

for (let z = 0; z < hiddenPrev.length; z++) {
  hiddenPrev[z].addEventListener("click", function () {
    slideButtonClick(z, -1);
  });
}

let heart = document.querySelectorAll(".heart-icon");
let heartHidden = document.querySelectorAll(".heart-icon-hidden");
let heartNum = document.querySelectorAll(".heart-num");
let heartNumHidden = document.querySelectorAll(".heart-num-hidden");


for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    heart[i].classList.toggle("bi-heart");
    heart[i].classList.toggle("bi-heart-fill");
    heartHidden[i].classList.toggle("bi-heart");
    heartHidden[i].classList.toggle("bi-heart-fill");
    if(heart[i].classList.contains('bi-heart')){
        heartNum[i].innerText=Number(heartNum[i].innerText)-1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)-1;
    }else{
        heartNum[i].innerText=Number(heartNum[i].innerText)+1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)+1;
    }
  });
}


for (let i = 0; i < heart.length; i++) {
    heartHidden[i].addEventListener("click", () => {
      heart[i].classList.toggle("bi-heart");
      heart[i].classList.toggle("bi-heart-fill");
      heartHidden[i].classList.toggle("bi-heart");
      heartHidden[i].classList.toggle("bi-heart-fill");
      if(heart[i].classList.contains('bi-heart')){
        heartNum[i].innerText=Number(heartNum[i].innerText)-1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)-1;
    }else{
        heartNum[i].innerText=Number(heartNum[i].innerText)+1;
        heartNumHidden[i].innerText=Number(heartNumHidden[i].innerText)+1;
    }
    });
  }
  