import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_RESET,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,
  USER_LOAD_RESET,
  USER_LOAD_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_REQUEST,
  USER_APPLY_JOB_RESET,
  USER_APPLY_JOB_FAIL,
  USER_APPLY_JOB_SUCCESS,
  USER_APPLY_JOB_REQUEST,
  ALL_USER_LOAD_RESET,
  ALL_USER_LOAD_FAIL,
  ALL_USER_LOAD_SUCCESS,
  ALL_USER_LOAD_REQUEST,
  USER_SIGNUP_RESET,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_REQUEST,
  REMOVE_USER_RESET,
  REMOVE_USER_FAIL,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_RESET,
  UPDATE_USER_FAIL,
  REMOVE_USER_JOB_HISTORY_REQUEST,
  REMOVE_USER_JOB_HISTORY_SUCCESS,
  REMOVE_USER_JOB_HISTORY_FAIL,
  REMOVE_USER_JOB_HISTORY_RESET
} from "../Constants/userConstants";

// sign up reducer
export const userReducerSignUp = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        userSignUp: action.payload,
      };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNUP_RESET:
      return {};
    default:
      return state;
  }
};

// Signin(Login) reducer
export const userReducerSignIn = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        loading: true,
        userInfo: null,
        isAuthenticated: false,
      };

    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };

    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload,
      };

    case USER_SIGNIN_RESET:
      return {};

    default:
      return state;
  }
};

// User profile
export const userReducerProfile = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { loading: true, user: null };
    case USER_LOAD_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
      };
    case USER_LOAD_FAIL:
      return { loading: false, user: null, error: action.payload };
    case USER_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// Logout reducer
export const userReducerLogout = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return { loading: true };

    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT_RESET:
      return {};

    default:
      return state;
  }
};

// Apply job reducer
export const userApplyJobReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_APPLY_JOB_REQUEST:
      return { loading: true };
    case USER_APPLY_JOB_SUCCESS:
      return {
        loading: false,
        userJob: action.payload,
      };
    case USER_APPLY_JOB_FAIL:
      return { loading: false, error: action.payload };
    case USER_APPLY_JOB_RESET:
      return {};
    default:
      return state;
  }
};

// All users readucer
export const allUserReducer = (state = { users  : []  }, action) => {
  switch (action.type) {
    case ALL_USER_LOAD_REQUEST:
      return { loading: true, users: [] };
    case ALL_USER_LOAD_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
      };
    case ALL_USER_LOAD_FAIL:
      return { loading: false, users: [], error: action.payload };
    case ALL_USER_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// Delete user reducer
export const deleteUserReducer = (state = { user:{} }, action) => {
  switch (action.type) {
    case REMOVE_USER_REQUEST:
      return { loading: true, users: [] };
    case REMOVE_USER_SUCCESS:
      const updatedusers = state.user.filter(user => user._id !== action.payload);
      return {
        loading: false,
        users: updatedusers,
      };
    case REMOVE_USER_FAIL:
      return { loading: false, users: [], error: action.payload };
    case REMOVE_USER_RESET:
      return {};
    default:
      return state;
  }
};

// Update user reducer
export const updateUserReducer = (state = { user:{} }, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { loading: true, users: [] };
    case UPDATE_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case UPDATE_USER_FAIL:
      return { loading: false, users: [], error: action.payload };
    case UPDATE_USER_RESET:
      return {};
    default:
      return state;
  }
};

// Delete user reducer
export const deleteUserJobHistoryReducer = (state = { user:{} }, action) => {
  switch (action.type) {
    case REMOVE_USER_JOB_HISTORY_REQUEST:
      return {loading: true, error:null };
    case REMOVE_USER_JOB_HISTORY_SUCCESS:
      return {
        loading: false,
        error:null
      };
    case REMOVE_USER_JOB_HISTORY_FAIL:
      return { loading: false,  error:action.payload };
    case REMOVE_USER_JOB_HISTORY_RESET:
      return {};
    default:
      return state;
  }
};