// 좋아요 기능

let heart = document.querySelectorAll(".heart-icon");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    heart[i].classList.toggle("bi-heart");
    heart[i].classList.toggle("bi-heart-fill");
  });
}

// 메인페이지 슬라이드
const slideBoxAll = document.querySelectorAll(".slideBox"); // 5
const nextBtn = document.querySelectorAll(".next"); // 5
const prevBtn = document.querySelectorAll(".prev"); // 5

const imageAll = {
  0: Array.from(slideBoxAll[0].children).slice(
    0,
    slideBoxAll[0].children.length - 2
  ),
  1: Array.from(slideBoxAll[1].children).slice(
    0,
    slideBoxAll[0].children.length - 2
  ),
  2: Array.from(slideBoxAll[2].children).slice(
    0,
    slideBoxAll[0].children.length - 2
  ),
  3: Array.from(slideBoxAll[3].children).slice(
    0,
    slideBoxAll[0].children.length - 2
  ),
  4: Array.from(slideBoxAll[4].children).slice(
    0,
    slideBoxAll[0].children.length - 2
  ),
};

const currentIndexs = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
};

const nextIndexs = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
};

function buttonClick(cardIdx, arrow) {
  if (arrow > 0) {
    console.log("다음 버튼 클릭");
    imageAll[cardIdx][currentIndexs[cardIdx]].style.display = "none";
    imageAll[cardIdx][nextIndexs[cardIdx]].style.display = "block";

    console.log(nextIndexs[cardIdx], imageAll[cardIdx].length - 1);
    if (nextIndexs[cardIdx] === imageAll[cardIdx].length - 1) {
      nextBtn[cardIdx].style.display = "none";
    } else {
      prevBtn[cardIdx].style.display = "block";
    }

    currentIndexs[cardIdx]++;
    nextIndexs[cardIdx]++;
  } else {
    console.log("이전 버튼 클릭");
    currentIndexs[cardIdx]--;
    nextIndexs[cardIdx]--;

    console.log(currentIndexs[cardIdx], imageAll[cardIdx].length - 1);
    if (currentIndexs[cardIdx] === 0) {
      prevBtn[cardIdx].style.display = "none";
    } else {
      nextBtn[cardIdx].style.display = "block";
    }

    imageAll[cardIdx][currentIndexs[cardIdx]].style.display = "block";
    imageAll[cardIdx][nextIndexs[cardIdx]].style.display = "none";
  }

  console.log("currentIndexs[cardIdx]", currentIndexs[cardIdx]);
  console.log("nextIndexs[cardIdx]", nextIndexs[cardIdx]);
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

// 팝업 슬라이드

const searchAll = document.querySelectorAll(".search");
const closeAll = document.querySelectorAll(".close");
const hiddenBox = document.querySelectorAll(".hiddenBox");
const box = document.querySelectorAll(".box");
const contentBox = document.querySelectorAll(".contentBox");

for (let k = 0; k < hiddenBox.length; k++) {
  searchAll[k].addEventListener("click", function () {
    console.log(k);
    console.log(hiddenBox.length);
    console.log(this);

    hiddenBox[k].style.display = "block";
  });
}

for (let l = 0; l < box.length; l++) {
  closeAll[l].addEventListener("click", () => {
    for (let j = 0; j < box.length; j++) hiddenBox[j].style.display = "none";
  });
}

// //확대 슬라이드

const halfImgAll = document.querySelectorAll(".halfImg"); // 5
const hiddenNext = document.querySelectorAll(".hiddenNext"); // 5
const hiddenPrev = document.querySelectorAll(".hiddenPrev"); // 5

console.log(halfImgAll[0].children);
const hiddenImgAll = {
  0: Array.from(halfImgAll[0].children).slice(
    0,
    halfImgAll[0].children.length - 2
  ),
  1: Array.from(halfImgAll[1].children).slice(
    0,
    halfImgAll[0].children.length - 2
  ),
  2: Array.from(halfImgAll[2].children).slice(
    0,
    halfImgAll[0].children.length - 2
  ),
  3: Array.from(halfImgAll[3].children).slice(
    0,
    halfImgAll[0].children.length - 2
  ),
  4: Array.from(halfImgAll[4].children).slice(
    0,
    halfImgAll[0].children.length - 2
  ),
};

const currentHiddenIndexs = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
};

const nextHiddenIndexs = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
};
// };

function slideButtonClick(cardIdx, arrow) {
  if (arrow > 0) {
    console.log("다음 버튼 클릭");
    console.log(halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]]);
    console.log(halfImgAll[cardIdx]);
    console.log(halfImgAll);
    console.log("currentHiddenIndexs[cardIdx]", currentHiddenIndexs[cardIdx]);
    console.log("nextHiddenIndexs[cardIdx]", nextHiddenIndexs[cardIdx]);

   
    halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]].style.display = "none";
    halfImgAll[cardIdx][nextHiddenIndexs[cardIdx]].style.display = "block";

    console.log(nextHiddenIndexs[cardIdx], halfImgAll[cardIdx].length - 1);
    if (nextHiddenIndexs[cardIdx] === halfImgAll[cardIdx].length - 1) {
      hiddenNext[cardIdx].style.display = "none";
    } else {
      hiddenPrev[cardIdx].style.display = "block";
    }

    currentHiddenIndexs[cardIdx]++;
    nextHiddenIndexs[cardIdx]++;
  } else {
    console.log("이전 버튼 클릭");
    currentHiddenIndexs[cardIdx]--;
    nextHiddenIndexs[cardIdx]--;

    console.log(currentHiddenIndexs[cardIdx], halfImgAll[cardIdx].length - 1);
    if (currentHiddenIndexs[cardIdx] === 0) {
      hiddenPrev[cardIdx].style.display = "none";
    } else {
      hiddenNext[cardIdx].style.display = "block";
    }

    halfImgAll[cardIdx][currentHiddenIndexs[cardIdx]].style.display = "block";
    halfImgAll[cardIdx][nextHiddenIndexs[cardIdx]].style.display = "none";
  }

  console.log("currentHiddenIndexs[cardIdx]", currentHiddenIndexs[cardIdx]);
  console.log("nextHiddenIndexs[cardIdx]", nextHiddenIndexs[cardIdx]);
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
