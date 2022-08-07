import { UserConstant } from "../constants";
const userInitialState = {
  user: {},
  error: '',
  loading: true,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case UserConstant.SET_USER: {
      state.user = { ...action.payload.user };
      state.error = `${action.payload.error}`;
      state.loading = { ...action.payload.loading };
      return state;
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
