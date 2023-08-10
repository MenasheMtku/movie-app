require("dotenv").config();
const fetch = require("node-fetch");

const baseurl = process.env.BASE_URL;
const key = process.env.API_KEY;

const week_trends = `${baseurl}/trending/movie/week?api_key=${key}`;

exports.trendRoute = async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9. eyJhdWQiOiI3ZWIxNGUyYWE1ZDY2N2Y4NzM0ZGUyYTBmN2QyZTMyMiIsInN1YiI6IjY0YzdiYmE4ZDdhNzBhMDEzOWRjYjIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZSm-7eDwUd4rkIZFYFZF1PnjiiDPaPm7_I1ILGUYdvI",
    },
  };

  await fetch(week_trends, options)
    .then(res => res.json())
    .then(data =>
      res.render("trendPage", {
        data: data,
        base: baseurl,
        key: key,
        subtitle: "Trending",
      })
    )
    .catch(err => console.error("error:" + err));
};
