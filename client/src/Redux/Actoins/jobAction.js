import axios from "axios";
import { toast } from "react-toastify";
import {
  DELETE_JOB_FAIL,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_SUCCESS,
  REGISTER_JOB_FAIL,
  REGISTER_JOB_REQUEST,
  REGISTER_JOB_SUCCESS,
  SINGLE_JOB_LOAD_FAIL,
  SINGLE_JOB_LOAD_REQUEST,
  SINGLE_JOB_LOAD_SUCCESS,
  UPDATE_JOB_FAIL,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
} from "../Constants/jobConstants";

// All job action
export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`
      );

      dispatch({
        type: JOB_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Single job action
export const singleJobLoadAction = (id) => async (dispatch) => {
  dispatch({ type: SINGLE_JOB_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`http://localhost:8000/api/job/${id}`);
    
    dispatch({
      type: SINGLE_JOB_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_JOB_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Create job action
export const registerAjobAction = (job) => async (dispatch) => {
  dispatch({ type: REGISTER_JOB_REQUEST });
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.post('http://localhost:8000/api/job/create', job, { 'headers': { 'Authorization':  token} }, { 
            withCredentials: true,
        });

        console.log('data : ', data)

    dispatch({
      type: REGISTER_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job created successfully");

  } catch (error) {
    dispatch({
      type: REGISTER_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Upadate job action
export const updatejobAction = (id, job) => async (dispatch) => {
  dispatch({ type: UPDATE_JOB_REQUEST });
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.put(`http://localhost:8000/api/job/update/${id}`, job, { 'headers': { 'Authorization':  token} }, { 
            withCredentials: true,
        });

    dispatch({
      type: UPDATE_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job updated successfully");

  } catch (error) {
    dispatch({
      type: UPDATE_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

// Daelete job action
export const deleteJobAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_JOB_REQUEST });
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.delete(`http://localhost:8000/api/job/delete/${id}`, { 'headers': { 'Authorization':  token} }, { 
            withCredentials: true,
        });

    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job deleted successfully");

  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: error.response,
    });
    toast.error(error.response);
  }
};