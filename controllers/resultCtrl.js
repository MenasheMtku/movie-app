const request = require("request");
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

exports.resultRoute = (req,res)=>{
  let key = "&apikey=thewdb";
  let query = req.query.search + "" + key;
  let url = "http://www.omdbapi.com/?s=" + query;
  let serachQury = req.query.search;

  request(url, function (error, respond, body) {
    if (!error && respond.statusCode) {
      let data = JSON.parse(body);
      res.render('searchResults', { data: data, serachQury: serachQury});
      // res.render({search: search});
    }
    // if(error){
    //   res.render('searchError',)
    // }
    // console.log(search[0]);
  });
}