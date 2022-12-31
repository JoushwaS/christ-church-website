const CORS_URL = "https://vast-island-29309.herokuapp.com/";
const LIVE_URL = "https://christ-church-backend-server.herokuapp.com/api/v1/";
const LOCAL_URL = "http://localhost:5000/api/v1/";

const BASE_URL = LOCAL_URL;
const TOKEN = localStorage.getItem("token");

export { LIVE_URL, LOCAL_URL, BASE_URL, TOKEN };
