import ActionTypes from "../constant/index";

const initial_state = {
  isAuthenticated: false,
  user: {},
  token: "",
  userType: "",
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN:
      console.log("action login payload", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        userType: action.payload.user?.type,
      };

    case ActionTypes.UPDATE_AUTH:
      localStorage.setItem("userData", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        userUpdated: true,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
      };
    default:
      return state;
  }
};

export default AuthReducer;
