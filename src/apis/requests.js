import axios from "axios";
import { BASE_URL, TOKEN } from "./constant";

// GLOBAL GET REQUEST WITH AUTHRIZATION
const GET = async (path, params) => {
  // SETTING UP HEADER & PARAMS
  console.log({ params });
  const HEADER = {
    headers: {
      "Access-Control-Allow-Credentials": "true",
      params: params,
    },
  };
  // GETTING RESPONSE
  if (params) {
    let res = await axios.get(BASE_URL + path + params, "");
    return res.data;
  } else {
    let res = await axios.get(BASE_URL + path, "");
    return res.data;
  }
};
// GLOBAL POST REQUEST WITH AUTHRIZATION
const POST = async (path, token, data, formData) => {
  // SETTING UP HEADER
  console.log({ TOKEN });
  const HEADER = {
    headers: formData
      ? {
          "Access-Control-Allow-Credentials": "true",

          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        }
      : {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",

          // Authorization: `Bearer ${TOKEN}`,
        },
  };
  // GETTING RESPONSE
  let res = await axios.post(BASE_URL + path, data, HEADER);
  return res.data;
};
// GLOBAL PUT REQUEST WITH AUTHRIZATION
const PUT = async (path, token, params, data, formData) => {
  // SETTING UP HEADER & PARAMS

  console.log({ TOKEN });
  const HEADER = {
    headers: formData
      ? {
          "Access-Control-Allow-Credentials": "true",

          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        }
      : {
          // "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",

          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
  };
  // GETTING RESPONSE
  if (params) {
    let res = await axios.put(BASE_URL + path + params, data, HEADER);
    return res.data;
  } else {
    let res = await axios.put(BASE_URL + path, data, HEADER);
    return res.data;
  }
};

// // GLOBAL DELETE REQUEST WITH AUTHRIZATION
const DELETE = async (path, token, params) => {
  // SETTING UP HEADER & PARAMS
  const HEADER = {
    headers: token
      ? {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      : {
          "Content-Type": "application/json",
          params: params,
        },
  };
  // GETTING RESPONSE
  let res = await axios.delete(BASE_URL + path + params, HEADER);
  return res.data;
};

export { POST, GET, DELETE, PUT };
