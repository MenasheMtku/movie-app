const express = require('express')


app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();
app.set("view engine", "ejs");
// app.use(express.urlencoded({extended: true}));

// add css to templates
app.use(express.static("public"));  
app.use('/css',express.static(__dirname + "/public"));
app.use('/img',express.static(__dirname + "/public"));


// routes
app.use('/', require('./routes/rootRoute'));
app.use('/results',require('./routes/resultRoute'));



app.get("*", async (req, res) => {
  res.send("Sorry page not found....To see results enter the correct path's");
});

app.listen(PORT, ()=>{
  console.log(`app listening on port ${PORT}`);
})