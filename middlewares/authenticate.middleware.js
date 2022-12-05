/**
 * This middleware is responsible for authenticating routes.
 * If a user doesnt have a cookie named jwt valid or does not
 * send a Bearer token this middleware returns an error.
 */
const User = require("../models/User");

const debug = require("debug");
const passportJWT = require("../config/passport.config");
const { ApplicationError } = require("../helpers/errors.helper");
const jwt = require("jsonwebtoken");

// eslint-disable-next-line no-unused-vars
const DEBUG = debug("dev");
module.exports = {
  authenticate: async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token)
      return res.status(401).send({
        status: "failed",
        message: "Access Denied / Unauthorized request,",
      });

    try {
      token = token.split(" ")[1]; // Remove Bearer from string
      // console.log({ token });
      if (token === "null" || !token)
        return res.status(401).send("Unauthorized request");

      let verifiedUser = jwt.verify(token, process.env.JWT_KEY); // config.TOKEN_SECRET => 'secretKey'
      if (!verifiedUser)
        return res.status(401).send({
          status: "failed",
          message: "Unauthorized request",
        });
      console.log("verifiedUser", verifiedUser);
      const user = await User.findOne({ email: verifiedUser.email });
      req.user = user; // user_id & user_type_id
      next();
    } catch (error) {
      // console.log({ error });
      return res.status(400).send({
        status: "failed",
        message: "Invalid Token",
      });
    }
  },
};
