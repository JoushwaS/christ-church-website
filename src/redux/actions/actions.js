import { GET, POST, PUT, DELETE } from "../../apis/requests";
import ApiRoutes from "../../apis/ApiRoutes";
import ActionTypes from "../constant";
import { toast } from "react-toastify";

export const GET_CONTENT_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_CONTENT, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_CONTENT,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_SERMONS_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_ALL_SERMONS, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_SERMONS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_EXPLORE_INFO_ALL_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_EXPLORE_INFO_ALL, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_EXPLORE_INFO_ALL,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_EXPLORE_INFO_ACTION = (item, token) => {
  return (dispatch) => {
    // console.log({ item });
    return GET(ApiRoutes.GET_EXPLORE_INFO, item)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_EXPLORE_INFO,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};

export const GET_SERMON_ACTION = (item, token) => {
  return (dispatch) => {
    // console.log({ item });
    return GET(ApiRoutes.GET_SERMON, item)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_SERMON,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_BLOGS_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_BLOGS, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_BLOGS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_BLOG_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_BLOG, item)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_BLOG,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_SERMONS_TYPE_ACTION = (data, token) => {
  return (dispatch) => {
    return POST(ApiRoutes.GET_SERMONS_TYPE, data)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_SERMONS_TYPE,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const SEND_CONTACT_US_REQUEST_ACTION = (data, token) => {
  return (dispatch) => {
    return POST(ApiRoutes.SEND_CONTACT_US_REQUEST, data)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.SEND_CONTACT_US_REQUEST,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_EVENTS_LIST_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_EVENTS_LIST, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_EVENTS_LIST,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_EVENT_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_EVENT, item)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_EVENT,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_SACRAMENTS_LIST_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_SACRAMENTS, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_SACRAMENTS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_OVERSEAPARTNERS_LIST_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_OVERSEAPARTNERS, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_OVERSEAPARTNERS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export const GET_MINISTERIES_LIST_ACTION = (item, token) => {
  return (dispatch) => {
    return GET(ApiRoutes.GET_MINISTERIES, null, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_MINISTERIES,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
