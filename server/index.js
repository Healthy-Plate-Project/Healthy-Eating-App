const express = require("express");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
// const cookieParser = require('cookie-parser')
// var bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const router = require("express").Router();
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
const app = express();
// Please change export.testAPI back to true after testing. Do not push false in the develop branch! Use this to test the real live API.
exports.testAPI = true;

// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://healthy-eating-project-359101.uc.r.appspot.com/",
    ],
  })
);
app.use(routes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  app.use(routes);
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
