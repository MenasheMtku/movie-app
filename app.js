const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

require("dotenv").config();
app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: false }));
// add css to templates
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "partials")));
// app.use("/css", express.static(__dirname + "/public"));
// app.use("/img", express.static(__dirname + "/public"));

// routes
app.use("/", require("./routes/rootRoute"));
app.use("/results", require("./routes/resultRoute"));

app.get("*", async (req, res) => {
  res.send("Sorry page not found....To see results enter the correct path's");
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
