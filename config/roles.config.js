const blogController = require("../controllers/blogController");
const adminController = require("../controllers/adminController");
const contactController = require("../controllers/contactController");
const contentController = require("../controllers/contentController");
const eventController = require("../controllers/eventController");
const ministryController = require("../controllers/ministryController");
const overSeaPartnerController = require("../controllers/overSeaPartnerController");
const sacramentController = require("../controllers/sacramentController");
const sermonController = require("../controllers/sermonController");

let blogRoles = Object.getOwnPropertyNames(blogController);
let adminRoles = Object.getOwnPropertyNames(adminController);
let contactRoles = Object.getOwnPropertyNames(contactController);
let eventRoles = Object.getOwnPropertyNames(eventController);
let ministryRoles = Object.getOwnPropertyNames(ministryController);
let overSeaPartnerRoles = Object.getOwnPropertyNames(overSeaPartnerController);
let sacramentRoles = Object.getOwnPropertyNames(sacramentController);
let sermonRoles = Object.getOwnPropertyNames(sermonController);
let contentRoles = Object.getOwnPropertyNames(contentController);
let allRoles = {
  admin: ["*"],
};

[
  blogRoles,
  adminRoles,
  overSeaPartnerRoles,
  sacramentRoles,
  contactRoles,
  sermonRoles,
  eventRoles,
  ministryRoles,
  contentRoles,
].map((item) => {
  item.map((item) => {
    allRoles.admin.push(item);
  });
});

console.log("admin allRoles>>>>", allRoles.admin);
const roles = Object.keys(allRoles);

const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
