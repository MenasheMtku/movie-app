require("dotenv").config();
const fetch = require("node-fetch");
exports.resultRoute = async (req, res) => {
  const key = process.env.API_KEY;
  const baseurl = process.env.BASE_URL;
  const searchQuery = req.query.search;

  const newUrl = `${baseurl}/search/movie?query=${searchQuery}&api_key=${key}`;
  // const week_trends = `${baseurl}/trending/movie/week?api_key=${key}`;
  const parameters =
    "&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const discover = `${baseurl}/discover/movie?api_key=${key}${parameters}`;
  console.log(`Search Query Url ${newUrl}`);
  console.log(`Search string length: ${searchQuery.length}`);
  console.log(discover);

  const url = [newUrl, discover];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWIxNGUyYWE1ZDY2N2Y4NzM0ZGUyYTBmN2QyZTMyMiIsInN1YiI6IjY0YzdiYmE4ZDdhNzBhMDEzOWRjYjIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZSm-7eDwUd4rkIZFYFZF1PnjiiDPaPm7_I1ILGUYdvI",
    },
  };
  if (searchQuery.length === 0) {
    /* load the Home Page if the user query is empty */
    await fetch(url[1], options)
      .then(res => res.json())
      .then(data =>
        res.render(
          "homePage",
          { data: data, base: baseurl, key: key, subtitle: "Discover" },
          // console.log(data.results),
          console.log("homePage results")
        )
      )
      .catch(err => console.error("error:" + err));
  } else {
    await fetch(url[0], options)
      .then(res => res.json())
      .then(data =>
        res.render(
          "resultsPage",
          { data: data, searchQuery: searchQuery, base: baseurl, key: key }
          // console.log(data.results),
          // console.log("results page", data)
        )
      )
      .catch(err => console.error("error:" + err));
  }
};

// request(newUrl, function (error, respond, body) {
//   if (!error && respond.statusCode) {
//     let data = JSON.parse(body);
//     // if search query is empty then render the trending movies
//     if (searchQuery === 0 || searchQuery === null || searchQuery === "") {
//       // render the homepage if the query is EMPTY!!
//       request(week_trends, (error, respond, body) => {
//         if (!error && respond.statusCode) {
//           let data = JSON.parse(body);
//           res.render("homePage", { data: data, key: key });
//         }
//       });
//     } //Otherwise render the page for the search query
//     else {
//       res.render("searchResults", {
//         data: data,
//         searchQuery: searchQuery,
//         key: key,
//       });
//       console.log(newUrl);
//       console.log(searchQuery);
//     }
//   }
// });
// console.log(searchQuery);
