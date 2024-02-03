import axios from "axios";
import ApiConfig from "../config/apiconfig";

export default function api(path, body, method) {
     const requestDATA = {
          method: method,
          baseURL: ApiConfig.API_URL, 
          url: path,
          data: body,
          headers: {
               "Content-Type": "application/json",
               Authorization: getToken(),
          },
     };

     return new Promise((resolve, reject) => {
          axios(requestDATA)
               .then((res) => responseHandler(res, resolve))
               .catch(async (error) => {
                    console.log(error.response.status, error.response.data)
                    if (error.response.status === 401) {
                         const response = {
                              status: "login Error",
                              data: error.response.data.message,
                         };

                         return resolve(response);
                    }

                    const response = {
                         status: "Conflict",
                         data: error.response.data.message,
                    };
                    resolve(response);
               });
     });
}

async function responseHandler(res, resolve) {

    if (res.status < 200 || res.status >= 300) {
          const response = {
               status: "service Error",
               data: res.data,
          };

          return resolve(response);
     }
     let response;
     if (res.data.errorStatus < 0)
          response = {
               status: "login Error",
               data: res.data,
          };
     else
          response = {
               status: "ok",
               data: res.data,
          };
     return resolve(response);
}

export function getToken() {
     const token = localStorage.getItem("api_token");
     return "Berer " + token;
}
export function getId() {
     const id = localStorage.getItem("user_id");
     return id;
}
export function saveToken(token) {
     localStorage.setItem("api_token", token);
}

export function saveIdentity(identity) {
     localStorage.setItem("api_identity", identity);
}
export function saveId(identity) {
     localStorage.setItem("api_identity", identity);
}

export function getIdentity() {
     return localStorage.getItem("api_identity");
}
export function getId() {
     return localStorage.getItem("user_id");
}

export function delIdentity() {
     localStorage.removeItem('api_identity')
}
export function delToken() {
     localStorage.removeItem('api_token')
}
export function delId() {
     localStorage.removeItem('user_id')
}