const ApiRoutes = {
  // ADMIN
  ADMIN_LOGIN: "admin/admin-login",
  CREATE_ADMIN: "admin/create",

  // EVENTS
  GET_EVENTS_LIST: "event/get-all-events",
  GET_EVENT: "event/get-event/",
  CREATE_EVENT: "event/create-event",
  UPDATE_EVENT: "event/update-event/",

  DELETE_EVENT: "event/delete-event/",
  // WEBSITE CONTENT
  GET_CONTENT: "content/get",
  CREATE_CONTENT: "content/create",
  UPDATE_CONTENT: "content/update",
  // SACRAMENTS
  GET_SACRAMENTS: "sacrament/get-all-sacraments",
  CREATE_SACRAMENTS: "sacrament/create-sacrament",
  UPDATE_SACRAMENTS: "sacrament/update-sacrament/",
  DELETE_SACRAMENTS: "sacrament/delete-sacrament/",
  // SERMONS
  CREATE_SERMON: "sermon/create-sermon",
  UPDATE_SERMON: "sermon/update-sermon/",
  DELETE_SERMON: "sermon/delete-sermon/",
  GET_ALL_SERMONS: "sermon/get-all-sermons",
  GET_SERMON: "sermon/get-sermon/",
  GET_SERMONS_TYPE: "sermon/get-sermons-type",
  // OVER SEA PARTNERS
  CREATE_OVERSEAPARTNER: "over-sea-partner/create-partner",
  GET_OVERSEAPARTNERS: "over-sea-partner/get-all-partners",
  UPDATE_OVERSEAPARTNER: "over-sea-partner/update-partner/",
  DELETE_OVERSEAPARTNER: "over-sea-partner/delete-partner/",
  // MINISTERIES
  GET_MINISTERIES: "ministry/get-all-ministeries",
  CREATE_MINISTERIES: "ministry/create-ministry",
  UPDATE_MINISTERIES: "ministry/update-ministry/",
  DELETE_MINISTERIES: "ministry/delete-ministry/",
  // BLOGS
  GET_BLOGS: "blog/get-all",
  GET_BLOG: "blog/get/",
  CREATE_BLOG: "blog/create",
  UPDATE_BLOG: "blog/update/",
  DELETE_BLOG: "blog/delete/",
  // CONTACT REQUEST
  SEND_CONTACT_US_REQUEST: "contact-us/create-contact-request",
  GET_ALL_CONTACT_REQUESTS: "contact-us/get-all-contact-requests",
  GET_CONTACT_REQUEST: "contact-us/get-contact-request/",
  DELETE_CONTACT_REQUEST: "contact-us/delete-contact-us/",
  // EXPLORE INFO
  GET_EXPLORE_INFO_ALL: "explore-Church-info/get-all",

  GET_EXPLORE_INFO: "explore-Church-info/get/",
  GET_DONATION_INFO: " GET_DONATION_INFO",
  // SERVICES
};

export default ApiRoutes;
