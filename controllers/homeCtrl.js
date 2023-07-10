require("dotenv").config();
const fetch = require("node-fetch");

exports.homeRoute = (req, res) => {
  const baseurl = process.env.TMDB_BASE_URL;
  const key = process.env.TMDB_API_KEY;
  const week_trends = baseurl + "/trending/movie/week" + key;
  // const bod = req.body;
  // const url = week_trends;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmJhMzYyZTI0MjJiZTFiNzg0MjRmMzM0MWUwZTk4OSIsInN1YiI6IjY0MzQ1MmRhMzkxYjljMTE3OGM2OGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-duHd7MVds02J_voEGFVgBDykedpc13XPTiEmo-FHco",
    },
  };

  fetch(week_trends, options)
    .then(res => res.json())
    .then(data =>
      res.render(
        "homePage",
        { data: data, base: baseurl, key: key }
        // console.log(data.results)
      )
    )
    .catch(err => console.error("error:" + err));
};

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
