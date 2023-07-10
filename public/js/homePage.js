console.log("HomePage JS is ON!");

const movieItemEL = document.querySelectorAll(".movie-item");
const ratingCircleEL = document.querySelectorAll(".circle");
const ratingEL = document.querySelectorAll(".movie-rating");
const movieIdEL = document.querySelectorAll(".movie_id");

const movieNameEL = document.querySelectorAll(".name");

const roundVote = vote => {
  const rounded = Math.round(vote * 10) / 10;

  return rounded;
};

for (let i = 0; i < movieItemEL.length; i++) {
  const round = roundVote(ratingEL[i].textContent);
  console.log(movieNameEL[i].textContent, round, movieIdEL[i].textContent);
  // console.log(round);

  ratingEL[i].textContent = round;

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
