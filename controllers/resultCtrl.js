require("dotenv").config();
const fetch = require("node-fetch");
exports.resultRoute = (req, res) => {
  const baseurl = "https://api.themoviedb.org/3/";
  const key = "&api_key=56ba362e2422be1b78424f3341e0e989";

  const searchQuery = req.query.search;
  const newUrl = baseurl + "search/movie?query=" + `${searchQuery}` + `${key}`;
  const week_trends = baseurl + "trending/movie/week?" + key;
  console.log("Search query: " + `${searchQuery}`);
  // console.log(query);
  // console.log(req);

  const url = [newUrl, week_trends];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  if (!searchQuery) {
    /* load the Home Page if the user query is empty */
    fetch(url[1], options)
      .then(res => res.json())
      .then(data =>
        res.render(
          "homePage",
          { data: data, base: baseurl, key: key },
          // console.log(data.results),
          console.log("homePage results ")
        )
      )
      .catch(err => console.error("error:" + err));
  } else {
    fetch(url[0], options)
      .then(res => res.json())
      .then(data =>
        res.render(
          "resultsPage",
          { data: data, searchQuery: searchQuery, key: key }
          // console.log(data.results),
          // console.log("results page", data)
        )
      )
      .catch(err => console.error("error:" + err));
  }

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
};

// console.log(searchQuery);
