const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const v1Routes = require("./routes/index.route");
const cors = require("cors");
const connect = require("./db/db");
const mongoDbConfig = require("./config/mongodb.config");
const dotenv = require("dotenv");
require("./config/passport.config");

dotenv.config();

const PORT = process.env.PORT || 8000;

/**
 * Call the MongoDB connection based on the NODE_ENV setting
 * and return info about db name
 */
// connect();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
// if (process.env.NODE_ENV === "production") {
  mongoDbConfig.MongoDB().catch((err) => console.log(err));
// } else {
//   mongoDbConfig.MongoDBTest().catch((err) => console.log(err));
// }
// app.use(sessionMiddleware);

// app.use(session({ secret: 'godaddy420' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use("/api/v1/", v1Routes);
/*
 * CORS policy configuration
 */

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log("Server up on Port ", PORT);
});
