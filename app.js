require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;
require("dotenv").config();
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// add css to templates
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", require("./routes/homeRoute"));
app.use("/trend", require("./routes/trendRoute"));
app.use("/results", require("./routes/resultRoute"));
app.use("/movie/:id", require("./routes/movieRoute"));

app.get("/about", async (req, res) => {
  res.render("aboutPage", { title: "about", text: "About Page" });
});
app.get("*", async (req, res) => {
  // res.send("Sorry page not found....To see results enter the correct path's");
  res.render("searchError");
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
