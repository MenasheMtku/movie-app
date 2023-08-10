require("dotenv").config();
const fetch = require("node-fetch");

const baseurl = process.env.BASE_URL;
const key = process.env.API_KEY;
const parameters =
  "&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const discover = `${baseurl}/discover/movie?api_key=${key + parameters}`;
const week_trends = `${baseurl}/trending/movie/week?api_key=${key}`;
const upcomings = `${baseurl}/movie/upcoming?api_key=${key}`;
const links = [week_trends, upcomings, discover];
exports.homeRoute = async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9. eyJhdWQiOiI3ZWIxNGUyYWE1ZDY2N2Y4NzM0ZGUyYTBmN2QyZTMyMiIsInN1YiI6IjY0YzdiYmE4ZDdhNzBhMDEzOWRjYjIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZSm-7eDwUd4rkIZFYFZF1PnjiiDPaPm7_I1ILGUYdvI",
    },
  };

  await fetch(discover, options)
    .then(res => res.json())
    .then(data =>
      res.render(
        "homepage",
        { data: data, base: baseurl, key: key, subtitle: "Discover" }
        // console.log(Object.keys(data)),
        // ([page, results, total_p, total_r] = Object.values(data)),
        // console.log(
        //   `Page #${page}\nAll Pages ${total_p}\nAll Resuluts ${total_r}`
        // ),
        // console.log(`${key.padStart(90, "*")}`),
        // console.log(`${baseurl.padStart(90, "*")}`),
        // console.log(`${week_trends.padStart(90, "*")}`)
      )
    )
    .catch(err => console.error("error:" + err));
};

// const week_trends = baseurl + "/trending/movie/week";
// const bod = req.body;
// const url = week_trends;

// await fetch(upcomings, options)
//   .then(res => res.json())
//   .then(data =>
//     res.render("homePage", { data: data, base: baseurl, key: key })
//   )
//   .catch(err => console.error("error:" + err));

// Deprecated API
// request(week_trends, function (error, respond, body) {
//   if (!error && respond.statusCode) {
//     let data = JSON.parse(body);
//     // const base = baseurl;
//     // const movies = data;
//     console.log("This Week Trends URL: " + week_trends);
//     res.render("homePage", { data: data, base: baseurl, key: key });
//   }
// });
