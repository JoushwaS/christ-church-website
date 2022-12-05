const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
const { isEmailValid } = require("../utils/emailRegex");
const passport = require("passport");
const e = require("express");
const createCookieFromToken = (user, statusCode, req, res, message) => {
  const token = user.generateVerificationToken();

  res.status(statusCode).json({
    status: 1,
    message,
    token,
    data: {
      user,
    },
  });
};
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createUser: async (req, res) => {
    try {
      const { email, password, role, phoneNumber, fullName } = req.body;
      console.log({ email, password, role, phoneNumber, fullName });
      // return;
      if (!(email && password && fullName)) {
        return res.status(409).json({
          status: 0,
          message: "All fields are required",
        });
      }

      if (!["admin"].includes(role)) {
        return res.status(409).json({
          status: 0,
          message: "Role Not Supported",
        });
      }
      const checkEmail = await User.checkExistingField("email", email);
      if (checkEmail) {
        return res.status(409).json({
          status: 0,
          message: "Email already registered, Please Enter a Different Email",
        });
      } else if (role === "admin") {
        encryptedPassword = await bcrypt.hash(password, 10);

        const adminUser = new User();
        if (req.file) {
          const imageUrl = await cloudinaryUpload(req.file.path);

          if (imageUrl) {
            adminUser.image = imageUrl;
          }
        }
        adminUser.email = email;
        adminUser.password = encryptedPassword;
        adminUser.fullName = fullName;
        adminUser.phoneNumber = phoneNumber;
        adminUser.role = role;

        await adminUser.save();
        const tokenAuth = jwt.sign(
          { user_id: adminUser._id, email },
          process.env.JWT_KEY,
          {
            expiresIn: "2h",
          }
        );

        adminUser.token = tokenAuth;

        return res.status(200).json({
          status: "success",
          message: "Admin Successfully created",
          data: { adminUser },
        });
      }

      console.log(typeof user_device_token);

      const newUser = new User();
      newUser.email = email;
      newUser.password = password;
      newUser.fullName = fullName;

      newUser.role = role;

      const newUserResult = await newUser.save();

      if (newUserResult) {
        return res.status(200).json({
          status: "success",
          message: "User successfully created",
          data: { newUser },
        });
      }
    } catch (error) {
      // console.log(error);
      // DEBUG(error);
      return res.status(400).json({
        status: 0,
        message: error.message,
      });
    }
  },

  adminLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      // return;
      if (!(email && password)) {
        return res.status(400).send({
          status: "failed",
          message: "email or password missing!",
        });
      }

      const user = await User.findOne({ email });

      const result = bcrypt.compareSync(password, user.password);
      if (result) {
        if (user) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_KEY,
            {
              expiresIn: "2h",
            }
          );

          // save user token
          user.token = token;

          return res.status(200).json({
            status: "success",
            message: "Admin Login Sucessfull",
            data: { user },
          });
        }
      } else {
        return res.status(400).send({
          status: "failed",
          message: "Incorrect Password !",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        status: "failed",
        message: "Admin Login Failed!",
      });
    }
    // Our register logic ends here
  },
};
