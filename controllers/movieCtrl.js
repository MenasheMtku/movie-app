// require("dotenv").config();
const fetch = require("node-fetch");

exports.movieRoute = (req, res) => {
  const url = "https://api.themoviedb.org/3/movie";
  const key = "&api_key=56ba362e2422be1b78424f3341e0e989";

  // const id = req.body;
  // console.log(id);

  const options = {
    method: "GET",
    // url: "https://api.themoviedb.org/3/movie",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmJhMzYyZTI0MjJiZTFiNzg0MjRmMzM0MWUwZTk4OSIsInN1YiI6IjY0MzQ1MmRhMzkxYjljMTE3OGM2OGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-duHd7MVds02J_voEGFVgBDykedpc13XPTiEmo-FHco",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/569094?api_key=56ba362e2422be1b78424f3341e0e989",
    options
  )
    .then(res => res.json())
    .then(data => res.render("moviePage", { data: data, key: key }))
    .catch(err => console.error("error:" + err));
};

// request(options, function (error, respond, body) {
//   if (error && respond.statusCode) throw new Error(error);

//   const movie = req.params;
//   const data = JSON.parse(body);
//   console.log(data);
//   console.log(movie);
//   console.log(process.env.TMDB_API_KEY);

//   res.render("moviePage", { data: data, key: process.env.TMDB_API_KEY });
// });
