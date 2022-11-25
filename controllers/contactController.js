const debug = require("debug");
const ContactRequest = require("../models/ContactRequest");
const { isEmailValid } = require("../utils/emailRegex");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createContactRequest: async (req, res) => {
    try {
      const { firstName, lastName, email, contactNo, message } = req.body;

      const newContactRequest = new ContactRequest();

      // return;
      newContactRequest.firstName = firstName;
      newContactRequest.lastName = lastName;
      newContactRequest.contactNo = contactNo;
      if (isEmailValid(email)) {
        newContactRequest.email = email;
      } else {
        return res.status(403).json({
          status: 0,
          message: "Contact Request  Failed! Please Enter a Valid Email",
        });
      }
      newContactRequest.message = message;

      await newContactRequest.save().then((response) => {
        return res.status(200).json({
          status: 1,
          message: "Contact Request Created Successfully",
          data: { response },
        });
      });

      // return;
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Contact Request Creation Failed!",
        error: { error },
      });
    }
  },
  //   updateContactRequest: async (req, res) => {
  //     try {
  //       let data = { ...req.body };
  //       console.log(req.body);

  //       Object.keys(data).forEach(
  //         (k) => data[k] == null || (data[k] == "" && delete data[k])
  //       );
  //       console.log("updated data ContactRequest", data);
  //       // return;
  //       const contactRequest = await ContactRequest.findOneAndUpdate(
  //         { _id: req.params.ministryId },
  //         data,
  //         {
  //           new: true,
  //         }
  //       );

  //       // return;
  //       res.status(200).json({
  //         status: 1,
  //         message: "Contact Request Updated Successfully",
  //         data: { contactRequest },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       return res.status(400).json({
  //         status: 0,
  //         message: "ContactRequest Updated Failed!",
  //         error: { error },
  //       });
  //     }
  //   },
  deleteContactRequest: async (req, res) => {
    try {
      await ContactRequest.findOneAndDelete({
        _id: req.params.contactRequestId,
      });

      // return;
      res.status(200).json({
        status: 1,
        message: "Contact Request Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Contact Request Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllContactRequests: async (req, res) => {
    try {
      const contactRequests = await ContactRequest.find();
      // console.log(Ministrys);
      res.status(200).json({
        status: 1,
        message: "Contact Requests Fetched  Successfully",
        data: { contactRequests },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Contact Requests Fetched  Failed!",
        error: { error },
      });
    }
  },
  getContactRequest: async (req, res) => {
    try {
      const contactRequest = await ContactRequest.findOne({
        _id: req.params.contactRequestId,
      });
      // console.log(Ministrys);
      res.status(200).json({
        status: 1,
        message: "Contact Request Fetched  Successfully",
        data: { contactRequest },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Contact Request Fetched  Failed!",
        error: { error },
      });
    }
  },
};
