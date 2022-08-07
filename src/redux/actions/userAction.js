import axios from "../../config/axios";
import { UserConstant } from "../constants";

export const setUser = (data) => {
  return {
    type: UserConstant.SET_USER,
    payload: data,
  };
};

export const startLoginUser = (formData, redirect) => {
  return async () => {
    const res = await axios.get("/user");
    const data = res.data;
    let ifUser;

    data.map((user) => {
      if (user.email == formData.email) {
        ifUser = true;
      }
    });


    if (ifUser) {
      alert("Login Successful");
    } else {
      alert("User not found");
    }


    redirect();
  };

  // get form data and post/get api
  // you will get resposne
  // if true set user
  // false error alert
  // data.user
  // data.error
  // data.loading
};

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
