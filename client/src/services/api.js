import axios from "axios";



// CREATE AXIOS INSTANCE
const API = axios.create({

  baseURL:
    "http://localhost:5000/api",

});




// REQUEST INTERCEPTOR
API.interceptors.request.use(

  (req) => {

    // GET TOKEN
    const token =
      localStorage.getItem("token");




    // ATTACH TOKEN
    if (token) {

      req.headers.Authorization =
        `Bearer ${token}`;
    }

    return req;
  },

  (error) => {

    return Promise.reject(error);
  }
);




// RESPONSE INTERCEPTOR
API.interceptors.response.use(

  (response) => response,

  (error) => {

    // AUTO LOGOUT IF TOKEN INVALID
    if (
      error.response?.status === 401
    ) {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default API;