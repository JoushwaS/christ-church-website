import axios from "axios";
import { BASE_URL } from "../../apis/constant";
// const BASE_URL = "https://no-square.herokuapp.com/";

// Destructure axios
const { get, post, put, delete: del } = axios;

//GET REQUEST
const getRequest = async (url, token, queries) => {
  const api = `${BASE_URL}${url}`;

  const config = {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        },
  };

  const response = await get(api, config);
  return response;
};

//POST REQUEST
const postRequest = async (url, data, token) => {
  const api = `${BASE_URL}${url}`;

  const config = {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        },
  };

  const response = await post(api, data, config);
  return response;
};

// PUT REQUEST
const putRequest = async (url, data, token) => {
  const api = `${BASE_URL}${url}`;

  const config = {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      : {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
  };

  const response = await put(api, data, config);
  return response;
};

// DELETE REQUEST
const deleteRequest = async (url, token) => {
  const api = `${BASE_URL}${url}`;

  const config = {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        },
  };

  const response = await del(api, config);
  return response;
};

// EXPORT
export { getRequest, postRequest, putRequest, deleteRequest };
