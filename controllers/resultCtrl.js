const request = require("request");
// const bodyParser = require('body-parser');

exports.resultRoute = (req, res) => {
  const key = "api_key=56ba362e2422be1b78424f3341e0e989";
  let baseurl = "https://api.themoviedb.org/3";
  let query = req.query.search;

  let newUrl = baseurl + "/search/movie?query=" + `${query + "&"}` + `${key}`;
  let searchQuery = req.query.search;

  request(newUrl, function (error, respond, body) {
    if (!error && respond.statusCode) {
      let data = JSON.parse(body);
      res.render("searchResults", { data: data, searchQuery: searchQuery });
      console.log(newUrl);
    } else {
      res.render("serchError");
    }
  });
};
