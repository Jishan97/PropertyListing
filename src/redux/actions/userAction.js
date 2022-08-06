import axios from "../../config/axios";
import { UserConstant } from "../constants";

export const setUser = (user) => {
  return {
    type: UserConstant.SET_USER,
    payload: user,
  };
};

export const startLoginUser = (formData, redirect) => {};

export const startRegisterUser = (formData, redirect) => {
  return () => {
    axios
      .post("/user", formData)
      .then((response) => {
        if (response.data) {
          alert("User done register");
          redirect();
        }
      })
      .catch((err) => console.log(err));
  };
};
