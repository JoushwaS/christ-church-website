const express = require("express");
const _ = require("lodash");

const eventRoutes = require("./eventRoutes");
const sermonRoutes = require("./sermonRoutes");

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
];

_.forEach(defaultRoutes, (route) => {
  router.use(route.path, route.route);
});

module.exports = router;
