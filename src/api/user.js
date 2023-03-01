import { HTTP } from "../api/client";

export default {
  login(data) {
    return HTTP.post(`/auth/login`, {
      email: data.username,
      password: data.password
    });
  }, // login

  register(data) {
    return HTTP.post(`/auth/register`, {
      email: data.username,
      password: data.password
    });
  } // register
}; // export
