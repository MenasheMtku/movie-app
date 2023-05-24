const request = require("request");

exports.rootRoute = (req, res) => {
  let baseurl = "https://api.themoviedb.org/3";
  const key = "api_key=56ba362e2422be1b78424f3341e0e989";
  // let trendsByWeek = `${baseurl}/movie/week${key}`;
  let week_trends = baseurl + "/trending/movie/week?" + key;

  request(week_trends, function (error, respond, body) {
    if (!error && respond.statusCode) {
      let data = JSON.parse(body);
      // console.log(week_trends);
      // console.log(data);
      // inflating the trending movies
      res.render("search", { data: data });
    }
  });

  // res.render("search");
};
