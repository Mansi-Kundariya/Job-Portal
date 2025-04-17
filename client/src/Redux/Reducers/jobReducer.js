import {
  DELETE_JOB_FAIL,
  DELETE_JOB_REQUEST,
  DELETE_JOB_RESET,
  DELETE_JOB_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_RESET,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_RESET,
  REGISTER_JOB_SUCCESS,
  SINGLE_JOB_LOAD_FAIL,
  SINGLE_JOB_LOAD_REQUEST,
  SINGLE_JOB_LOAD_RESET,
  SINGLE_JOB_LOAD_SUCCESS,
  UPDATE_JOB_FAIL,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_RESET,
  UPDATE_JOB_SUCCESS,
} from "../Constants/jobConstants";

// Load all jobs
export const loadJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_LOAD_REQUEST:
      return { loading: true };
    case JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload.jobs,
      };
    case JOB_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

// Load single job
export const loadSingleJobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case SINGLE_JOB_LOAD_REQUEST:
      return { loading: true };
    case SINGLE_JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleJob: action.payload.job,
      };
    case SINGLE_JOB_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case SINGLE_JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

//Registred job;
export const registerAjobReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_JOB_REQUEST:
      return { loading: true };
    case REGISTER_JOB_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case REGISTER_JOB_FAIL:
      return { loading: false, error: action.payload };
    case REGISTER_JOB_RESET:
      return {};
    default:
      return state;
  }
};

// Upadate job reducer
export const updateJobReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_JOB_REQUEST:
      return { loading: true, jobs: [] };
    case UPDATE_JOB_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case UPDATE_JOB_FAIL:
      return { loading: false, jobs: [], error: action.payload };
    case UPDATE_JOB_RESET:
      return {};
    default:
      return state;
  }
};

// Delete job reducer
export const deleteJobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case DELETE_JOB_REQUEST:
      return { loading: true };
    case DELETE_JOB_SUCCESS:
      const updatedjobs = state.job.filter((job) => job._id !== action.payload);
      return {
        loading: false,
        users: updatedjobs,
      };
    case DELETE_JOB_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_JOB_RESET:
      return {};
    default:
      return state;
  }
};
