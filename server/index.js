const express = require("express");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes");
const router = require("express").Router();
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
const app = express();

app.use(cookieParser());

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://healthy-eating-project-359101.uc.r.appspot.com",
      "https://dragon-fruit-app.herokuapp.com",
    ],
  })
);
app.use(routes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
