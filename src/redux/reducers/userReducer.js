import { UserConstant } from "../constants";
const userInitialState = {};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case UserConstant.SET_USER: {
      return { ...action.payload };
    }
    case UserConstant.LOGOUT_USER: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
