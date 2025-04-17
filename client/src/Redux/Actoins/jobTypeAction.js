import axios from "axios";
import { toast } from "react-toastify";
import {
  CREATE_JOB_TYPE_FAIL,
  CREATE_JOB_TYPE_REQUEST,
  CREATE_JOB_TYPE_SUCCESS,
  DELETE_JOB_TYPE_FAIL,
  DELETE_JOB_TYPE_REQUEST,
  DELETE_JOB_TYPE_SUCCESS,
  JOB_TYPE_LOAD_FAIL,
  JOB_TYPE_LOAD_REQUEST,
  JOB_TYPE_LOAD_SUCCESS,
  UPDATE_JOB_TYPE_FAIL,
  UPDATE_JOB_TYPE_REQUEST,
  UPDATE_JOB_TYPE_SUCCESS,
} from "../Constants/jobTypeConstants";

export const jobTypeLoadAction = () => async (dispatch) => {
  dispatch({ type: JOB_TYPE_LOAD_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:8000/api/type/jobs");
    dispatch({
      type: JOB_TYPE_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_TYPE_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// create jobs category
export const createJobTypeAction = (jobtype) => async (dispatch) => {
  dispatch({ type: CREATE_JOB_TYPE_REQUEST });

  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      "http://localhost:8000/api/type/create",
      jobtype,
      { headers: { Authorization: token } },
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: CREATE_JOB_TYPE_SUCCESS,
      payload: data,
    });
    toast.success("Job type created successfully");
  } catch (error) {
    dispatch({
      type: CREATE_JOB_TYPE_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

export const deleteJobCategoryAction = (type_id) => async(dispatch) => {
  dispatch({ type: DELETE_JOB_TYPE_REQUEST });
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.delete(`http://localhost:8000/api/type/delete/${type_id}`, { 'headers' : {
      'Authorization': token }
    });

    dispatch({
      type: DELETE_JOB_TYPE_SUCCESS,
      payload: data
    });
    toast.success("deleted successfully");

  } catch (error) {
    dispatch({
      type: DELETE_JOB_TYPE_FAIL,
      payload: error.response
    });
    toast.error(error.response);
  }
}

// Update job type action
export const updateJobCategoryAction = (id, jobType) => async(dispatch) => {
  dispatch({ type: UPDATE_JOB_TYPE_REQUEST });
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.put(`http://localhost:8000/api/type/update/${id}`,jobType, { 'headers' : {
      'Authorization': token }
    });

    dispatch({
      type: UPDATE_JOB_TYPE_SUCCESS,
      payload: data
    });
    toast.success("updated successfully");

  } catch (error) {
    dispatch({
      type: UPDATE_JOB_TYPE_FAIL,
      payload: error.response
    });
    toast.error(error.response);
  }
}
