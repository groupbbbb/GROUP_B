// 좋아요 기능

let heart = document.querySelectorAll(".heart-icon");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    heart[i].classList.toggle("bi-heart");
    heart[i].classList.toggle("bi-heart-fill");
  });
}

// 메인페이지 슬라이드
// step2. slideBoxAll[0] ~ slideBoxAll[4]에 대해서 반복
// let slideBoxAll = document.querySelectorAll(".slideBox"); // 카드
// console.log(slideBoxAll);
// step1. slideBoxAll[0] 대해 3개 이미지가 슬라이드 가능하도록 코드완성
// console.log("s;adlfkj;asldkfj;slkdfj", slideBoxAll[0]);
// let imageAll = slideBoxAll[0].children; // 한 카드 내부의 이미지 개수 + 버튼 2개
// console.log(imageAll); // 이미지 n개 + 버튼 2개
// let imageAll = document.querySelectorAll(".slideImg");
// imageAll[0].style.display = "block";
// let imageLength = document.querySelectorAll(".slideImg").length;
// for ( slideBoxAll; slideBoxAll<length; slideBoxAll++) {
// }

let slideBoxAll = document.querySelectorAll(".slideBox");
let imageAll = slideBoxAll[0].children;
imageAll[0].style.display = "block";
let currentIndex = 0;
let nextIndex = 0;
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");

prevBtn[0].style.display = "none";

function buttonClick(arrow) {
  if (arrow > 0) {
    nextIndex += 1;
  } else if (arrow < 0) {
    nextIndex -= 1;
  }

  for (let index = 0; index < imageAll.length - 2; index++) {
    if (nextIndex == index) {
      imageAll[index].style.display = "block";
      currentIndex = index;
    } else {
      imageAll[index].style.display = "none";
    }
  }

  nextBtn[0].style.display = "block";
  prevBtn[0].style.display = "block";

  if (currentIndex == imageAll.length - 2) {
    nextBtn[0].style.display = "none";
  } else if (currentIndex == 0) {
    prevBtn[0].style.display = "none";
  }
}

nextBtn[0].addEventListener("click", function () {
  buttonClick(1);
});

prevBtn[0].addEventListener("click", function () {
  buttonClick(-1);
});

// x버튼과 돋보기 버튼
const searchAll = document.querySelectorAll(".search");
const body = document.querySelector("body");
const closeAll = document.querySelectorAll(".close");
const hiddenBox = document.querySelectorAll(".hiddenBox");
const box = document.querySelectorAll(".box");

for (let k = 0; k < box.length; k++) {
  searchAll[k].addEventListener("click", function () {
    console.log(this);
    for (let j = 0; j < box.length; j++)
      this.closest(".card").nextElementSibling.style.display = "block";
  });
}

for (let l = 0; l < box.length; l++) {
  closeAll[l].addEventListener("click", () => {
    for (let j = 0; j < box.length; j++) hiddenBox[j].style.display = "none";
  });
}

//팝업 슬라이드

let slideImageAll = document.querySelectorAll(".halfSlide");
slideImageAll[0].style.display = "block";

let slideimageLength = document.querySelectorAll(".halfSlide").length;

const hiddenNextBtn = document.querySelector(".hiddenNext");
const hiddenPrevBtn = document.querySelector(".hiddenPrev");

hiddenPrevBtn.style.display = "none";

let slideCurrentIndex = 0;
let slideNextIndex = 0;
function slideButtonClick(arrow) {
  if (arrow > 0) {
    slideNextIndex += 1;
  } else if (arrow < 0) {
    slideNextIndex -= 1;
  }

  for (let slideIndex = 0; slideIndex < slideimageLength; slideIndex++) {
    if (slideNextIndex == slideIndex) {
      slideImageAll[slideIndex].style.display = "block";
      slideCurrentIndex = slideIndex;
    } else {
      slideImageAll[slideIndex].style.display = "none";
    }
  }

  hiddenNextBtn.style.display = "block";
  hiddenPrevBtn.style.display = "block";

  if (slideCurrentIndex == slideimageLength - 1) {
    hiddenNextBtn.style.display = "none";
  } else if (slideCurrentIndex == 0) {
    hiddenPrevBtn.style.display = "none";
  }
}

hiddenNextBtn.addEventListener("click", function () {
  slideButtonClick(1);
});

hiddenPrevBtn.addEventListener("click", function () {
  slideButtonClick(-1);
});
