import axios from 'axios';
import { toast } from "react-toastify";
import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_REQUEST,
    USER_APPLY_JOB_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    REMOVE_USER_FAIL,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_REQUEST,
    UPDATE_USER_REQUEST,
    REMOVE_USER_JOB_HISTORY_REQUEST,
    REMOVE_USER_JOB_HISTORY_SUCCESS,
    REMOVE_USER_JOB_HISTORY_FAIL
} from '../Constants/userConstants';

// Sign up action
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post("/api/signup", user);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
        toast.success("Register Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// Sign in action
export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post('http://localhost:8000/api/signin', user);
        // console.log(data.token)
        localStorage.setItem('token', data.token);
        
        //after refresh page(userInfo) still remain same
        localStorage.setItem('userInfo', JSON.stringify(data)); 
        
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// User profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    
    try {
        const token = localStorage.getItem('token');

        const { data } = await axios.get('http://localhost:8000/api/me',{ 'headers': { 'Authorization':  token} }, { 
            withCredentials: true,
        });
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// Log out action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        const { data } = await axios.get('http://localhost:8000/api/logout');
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
    }
}

// User apply job action
export const userApplyJobAction = (job) => async (dispatch) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST });
    try {
        const token = localStorage.getItem('token');
        
        const { data } = await axios.post('http://localhost:8000/api/user/jobhistory', job, { 'headers': { 'Authorization':  token} });

        dispatch({
            type: USER_APPLY_JOB_SUCCESS,
            payload: data
        });
        toast.success("Apply Successfully for this Job!");
    } catch (error) {
        dispatch({
            type: USER_APPLY_JOB_FAIL,
            payload: error.response
        });
        toast.error(error.response);
    }
}

// All user action
export const allUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const token = localStorage.getItem('token');
        
        const { data } = await axios.get('http://localhost:8000/api/allusers', { 'headers': { 'Authorization':  token} });
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response
        });
    }
}

// Update user action
export const updateUserAction = (id, user) => async(dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
        const token = localStorage.getItem('token');
        
        const { data } = await axios.put(`http://localhost:8000/api/user/edit/${id}`, user, { 'headers': { 'Authorization':  token} });

        dispatch({
            type: REMOVE_USER_SUCCESS,
            payload: data
        });
        toast.success("updated successfully");

    } catch (error) {
        dispatch({
            type: REMOVE_USER_FAIL,
            payload: error.response
        });
        toast.error(error.response);
    }
}

// Delete user action
export const deleteUserAction = (id) => async(dispatch) => {
    dispatch({ type: REMOVE_USER_REQUEST });
    try {
        const token = localStorage.getItem('token');
        
        const { data } = await axios.delete(`http://localhost:8000/api/admin/user/delete/${id}`, { 'headers': { 'Authorization':  token} });

        dispatch({
            type: REMOVE_USER_SUCCESS,
            payload: data
        });
        toast.success("user deleted successfully");
    } catch (error) {
        dispatch({
            type: REMOVE_USER_FAIL,
            payload: error.response
        });
        toast.error(error.response);
    }
}

// Delete job history action
export const deleteUserJobHistoryAction = (userId, jobId) => async(dispatch) => {
    dispatch({ type: REMOVE_USER_JOB_HISTORY_REQUEST });
    try {
        const token = localStorage.getItem('token');
        console.log(token);

        const { data } = await axios.delete(`http://localhost:8000/api/user/${userId}/delete/jobhistory/${jobId}`, { 'headers': { 'Authorization':  token} });

        console.log('data');

        dispatch({
            type: REMOVE_USER_JOB_HISTORY_SUCCESS,
            payload: jobId
        });
        toast.success("job history deleted successfully");
    } catch (error) {
        dispatch({
            type: REMOVE_USER_JOB_HISTORY_FAIL,
            payload: error.response
        });
        toast.error(error.response);
    }
}