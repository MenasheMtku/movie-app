console.log("HomePage JS is ON!");

const scrollContainer = document.querySelector(".media-scroller");
const movieItemEL = document.querySelectorAll(".movie-img");
const ratingCircleEL = document.querySelectorAll(".circle");
const movieNameEL = document.querySelectorAll(".name");
const ratingEL = document.querySelectorAll(".movie-rating");
const movieIdEL = document.querySelectorAll(".movie_id");
const realesDateEL = document.querySelectorAll(".movie-release-date");

// scrollContainer.addEventListener("wheel", evt => {
//   evt.preventDefault();
//   // console.log(scrollContainer);
//   scrollContainer.scrollLeft += evt.deltaY;
// });

const getYear = date => {
  const dateParts = date.split("-");
  console.log(dateParts);
  // console.log(dateParts);
  // const movieYear = dateParts[0].replace(/\s/g, "");

  return movieYear;
};

for (let i = 0; i < movieItemEL.length; i++) {
  const round = ratingEL[i].textContent.slice(0, 3);
  const year = realesDateEL[i].textContent.trim().slice(0, 4);

  ratingEL[i].textContent = round;
  realesDateEL[i].textContent = year;
  // console.log(realesDateEL[i].textContent.trim());

  if (round >= 8) {
    ratingCircleEL[i].style.backgroundColor = "#8fbc8f";
    // console.log("bigger than 8");
  } else if (round >= 5) {
    ratingCircleEL[i].style.backgroundColor = "#e58947";
    // console.log("between 5 -  8");
  } else {
    ratingCircleEL[i].style.backgroundColor = "#ff726f ";
    // console.log("less than 5");
  }
}
