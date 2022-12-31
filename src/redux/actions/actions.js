import { GET, POST, PUT, DELETE } from "../../apis/requests";
import ApiRoutes from "../../apis/ApiRoutes";
import ActionTypes from "../constant";
import { toast } from "react-toastify";
import { ObjectToFormData } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
// CONTENT ACTIONS
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
export const UPDATE_CONTENT_ACTION = (item, token, params) => {
  return (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return PUT(ApiRoutes.UPDATE_CONTENT, token, params, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.UPDATE_CONTENT,
            payload: response,
          });

          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};
export const CREATE_CONTENT_ACTION = (item, token, navigate) => {
  return (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return POST(ApiRoutes.CREATE_CONTENT, token, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.CREATE_CONTENT,
            payload: response,
          });
          navigate("/content");
        }
      })
      .catch((error) => {
        console.log("error", error);
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
export const UPDATE_SERMON_ACTION = (item, token, params) => {
  return (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return PUT(ApiRoutes.UPDATE_SERMON, token, params, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.UPDATE_SERMON,
            payload: response,
          });

          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};
export const CREATE_SERMON_ACTION = (item, token, navigate) => {
  return (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return POST(ApiRoutes.CREATE_SERMON, token, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.CREATE_SERMON,
            payload: response,
          });
          navigate("/sermons");
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};
export const DELETE_SERMON_ACTION = (item, token, navigate) => {
  return (dispatch) => {
    // return;
    return DELETE(ApiRoutes.DELETE_SERMON, token, item)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.DELETE_SERMON,
            payload: response,
          });
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("error", error);
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

export const UPDATE_BLOG_ACTION = (item, token, params) => {
  return (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return PUT(ApiRoutes.UPDATE_BLOG, token, params, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.UPDATE_BLOG,
            payload: response,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};

export const CREATE_BLOG_ACTION = (item, token, navigate) => {
  return (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return POST(ApiRoutes.CREATE_BLOG, token, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.CREATE_BLOGS,
            payload: response,
          });
          navigate("/blogs");
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};
export const DELETE_BLOG_ACTION = (item, token, navigate) => {
  return (dispatch) => {
    // return;
    return DELETE(ApiRoutes.DELETE_BLOG, token, item)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.DELETE_BLOG,
            payload: response,
          });
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("error", error);
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

// over sea partner
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

export const UPDATE_OVERSEAPARTNER_ACTION = (item, token, params) => {
  return async (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return PUT(
      ApiRoutes.UPDATE_OVERSEAPARTNER,
      token,
      params,
      updateObject,
      true
    )
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.UPDATE_OVERSEAPARTNER,
            payload: response,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};

export const CREATE_OVERSEAPARTNER_ACTION = (item, token, navigate) => {
  return async (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return POST(ApiRoutes.CREATE_OVERSEAPARTNER, token, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.CREATE_OVERSEAPARTNER,
            payload: response,
          });
          navigate("/overseapartners");
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};
export const DELETE_OVERSEAPARTNER_ACTION = (item, token, navigate) => {
  return async (dispatch) => {
    // return;
    return DELETE(ApiRoutes.DELETE_OVERSEAPARTNER, token, item)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.DELETE_OVERSEAPARTNER,
            payload: response,
          });
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};

export const GET_OVERSEAPARTNER_ACTION = (item, token) => {
  return async (dispatch) => {
    return GET(ApiRoutes.GET_OVERSEAPARTNER, item)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_OVERSEAPARTNER,
            payload: response,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};

// MINISTRY

export const UPDATE_MINISTERIES_ACTION = (item, token, params) => {
  return async (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return PUT(ApiRoutes.UPDATE_MINISTERIES, token, params, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.UPDATE_MINISTRY,
            payload: response,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};

export const CREATE_MINISTERIES_ACTION = (item, token, navigate) => {
  return async (dispatch) => {
    const updateObject = ObjectToFormData(item);

    console.log(updateObject);
    // return;
    return POST(ApiRoutes.CREATE_MINISTERIES, token, updateObject, true)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.CREATE_MINISTERIES,
            payload: response,
          });
          navigate("/ministeries");
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};
export const DELETE_MINISTERIES_ACTION = (item, token, navigate) => {
  return async (dispatch) => {
    // return;
    return DELETE(ApiRoutes.DELETE_MINISTERIES, token, item)
      .then((response) => {
        console.log("response update", response);
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success(response.message);

          dispatch({
            type: ActionTypes.DELETE_MINISTRY,
            payload: response,
          });
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };
};

export const GET_MINISTERY_ACTION = (item, token) => {
  return async (dispatch) => {
    return GET(ApiRoutes.GET_MINISTERY, item)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          dispatch({
            type: ActionTypes.GET_MINISTERY,
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
  return async (dispatch) => {
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
