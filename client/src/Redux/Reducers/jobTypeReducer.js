import {
  CREATE_JOB_TYPE_FAIL,
  CREATE_JOB_TYPE_REQUEST,
  CREATE_JOB_TYPE_RESET,
  CREATE_JOB_TYPE_SUCCESS,
  DELETE_JOB_TYPE_FAIL,
  DELETE_JOB_TYPE_REQUEST,
  DELETE_JOB_TYPE_RESET,
  DELETE_JOB_TYPE_SUCCESS,
  JOB_TYPE_LOAD_FAIL,
  JOB_TYPE_LOAD_REQUEST,
  JOB_TYPE_LOAD_RESET,
  JOB_TYPE_LOAD_SUCCESS,
  UPDATE_JOB_TYPE_FAIL,
  UPDATE_JOB_TYPE_REQUEST,
  UPDATE_JOB_TYPE_RESET,
  UPDATE_JOB_TYPE_SUCCESS,
} from "../Constants/jobTypeConstants";

export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
  switch (action.type) {
    case JOB_TYPE_LOAD_REQUEST:
      return { loading: true };

    case JOB_TYPE_LOAD_SUCCESS:
      return {
        loading: false,
        jobType: action.payload.jobT,
      };

    case JOB_TYPE_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case JOB_TYPE_LOAD_RESET:
      return {};

    default:
      return state;
  }
};

// create job type reducer
export const createJobTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_JOB_TYPE_REQUEST:
      return { loading: true };
    case CREATE_JOB_TYPE_SUCCESS:
      return {
        loading: false,
        jobType: action.payload,
      };
    case CREATE_JOB_TYPE_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_JOB_TYPE_RESET:
      return {};
    default:
      return state;
  }
};

// Delete job type reducer
export const deleteJobTypeReducer = (state = { jobType: {} }, action) => {
  switch (action.type) {
    case DELETE_JOB_TYPE_REQUEST:
      return { loading: true, jobType: [] };
    case DELETE_JOB_TYPE_SUCCESS:
    //   const updatedtype = state.user.filter(
    //     (type) => type._id !== action.payload
    //   );
      return {
        loading: false,
        users: action.payload,
        // users: updatedtype,
      };
    case DELETE_JOB_TYPE_FAIL:
      return { loading: false, jobType: [], error: action.payload };
    case DELETE_JOB_TYPE_RESET:
      return {};
    default:
      return state;
  }
};

// Update job type reducer
export const updateJobTypeReducer = (state = { }, action) => {
  switch (action.type) {
    case UPDATE_JOB_TYPE_REQUEST:
      return { loading: true, jobType: [] };
    case UPDATE_JOB_TYPE_SUCCESS:
    //   let data = action.payload;
    //   const updatedArray = [];
    //   state.map((item) => {
    //     if (item._id == data._id) {
    //       item.jobTypeName = data.jobTypeName;
    //     }
    //     updatedArray.push(item);
    //   });
      return {
        loading: false,
        users: action.payload,
        // users: updatedArray,
      };
    case UPDATE_JOB_TYPE_FAIL:
      return { loading: false, jobType: [], error: action.payload };
    case UPDATE_JOB_TYPE_RESET:
      return {};
    default:
      return state;
  }
};
