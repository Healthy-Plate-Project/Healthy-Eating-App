const express = require("express");
require('dotenv').config()
// const cors = require('cors');
// const cookieParser = require('cookie-parser')
// var bodyParser = require("body-parser");
const path = require("path");
// const routes = require("./routes");
const router = require("express").Router();
const db = require("./config/connection.tsx");
const PORT = process.env.PORT || 3001;
const app = express();

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
// app.use(cors({
//   credentials: true,
//   origin: ['http://localhost:3000']
// }));
// app.use(routes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
