import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_START, LOG_OUT } from "./../type";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        user: null,
        token: null,
        isFetching: true,
        error: false,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        // user: action.payload.user,
        // token: action.payload.user,
        isFetching: false,
        error: false,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isFetching: false,
        error: true,
        isAuthenticated: false,
      };

    case LOG_OUT: {
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
