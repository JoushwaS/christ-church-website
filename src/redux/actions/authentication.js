import { toast } from "react-toastify";
import ActionTypes from "../constant";
import { GET, POST, PUT } from "../../apis/requests";
import ApiRoutes from "../../apis/ApiRoutes";

const LOGIN = (credientials, navigate) => {
  return async (dispatch) => {
    return await POST(ApiRoutes.ADMIN_LOGIN, null, credientials, null)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          console.log("login action response", response.data);
          localStorage.setItem("token", response.data.user.token);
          localStorage.setItem("userData", JSON.stringify(response.data.user));
          toast.success("Login Successful");

          dispatch({
            type: ActionTypes.ADMIN_LOGIN,
            payload: response.data.user,
          });

          navigate("/");
        }
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };
};

const LOGOUT = (navigate) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    dispatch({
      type: ActionTypes.LOGOUT,
    });
    // navigate("/login");
  };
};

const REGISTER = (credientials, setLoading, navigate) => {
  return (dispatch) => {
    return POST("/users/create", null, credientials)
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
          setLoading(false);
        } else {
          localStorage.setItem("token", response.message.token);
          localStorage.setItem(
            "userData",
            JSON.stringify(response.message.user)
          );
          dispatch({
            type: ActionTypes.LOGIN,
            payload: response.message,
          });
          toast.success("Registration Successfull");
          setLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };
};

const UPDATE_USER = (data, token, userId) => {
  return (dispatch) => {
    const formData = new FormData();

    if (typeof data.image === "object") {
      formData.append("image", data.image);
    } else if (typeof data.image === "string") {
      // formData.append('images', element)
    }

    formData.append("firstName", data.firstName);
    formData.append("lastName ", data.lastName);
    formData.append("email", data.email);
    formData.append("contact", data.contact);

    return PUT("/users/update", token, userId, formData)
      .then((response) => {
        console.log(response);
        // debugger
        if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.success("User Info Updated Successfully");
          dispatch({
            type: ActionTypes.UPDATE_AUTH,
            payload: response.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
};

const CHECK_TOKEN = (token) => {
  return (dispatch) => {
    return GET("/auth/refresh", token, "")
      .then((response) => {
        if (response.success === false) {
          toast.error(response.message);
        } else {
          response.message.token = token;
          dispatch({
            type: ActionTypes.LOGIN,
            payload: response.message,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
};
export { LOGIN, LOGOUT, REGISTER, UPDATE_USER, CHECK_TOKEN };
