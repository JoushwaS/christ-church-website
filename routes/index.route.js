const express = require("express");
const _ = require("lodash");

const eventRoutes = require("./eventRoutes");
const sermonRoutes = require("./sermonRoutes");
const ministryRoutes = require("./ministryRoutes");
const overseapartnerRoutes = require("./overseapartnerRoutes");
const sacramentRoutes = require("./sacramentRoutes");
const contactUsRoutes = require("./contactUsRoutes");
const contentRoutes = require("./contentRoutes");
const blogRoutes = require("./blogRoutes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/event",
    route: eventRoutes,
  },
  {
    path: "/sermon",
    route: sermonRoutes,
  },
  {
    path: "/ministry",
    route: ministryRoutes,
  },
  {
    path: "/over-sea-partner",
    route: overseapartnerRoutes,
  },
  {
    path: "/sacrament",
    route: sacramentRoutes,
  },
  {
    path: "/contact-us",
    route: contactUsRoutes,
  },
  {
    path: "/content",
    route: contentRoutes,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
];

_.forEach(defaultRoutes, (route) => {
  router.use(route.path, route.route);
});

module.exports = router;
