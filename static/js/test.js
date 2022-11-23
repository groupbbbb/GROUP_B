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
