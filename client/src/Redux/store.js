import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { allUserReducer, deleteUserJobHistoryReducer, deleteUserReducer, updateUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from '../Redux/Reducers/userReducer';
import { deleteJobReducer, loadJobReducer, loadSingleJobReducer, registerAjobReducer, updateJobReducer } from './Reducers/jobReducer';
import { createJobTypeReducer, deleteJobTypeReducer, loadJobTypeReducer, updateJobTypeReducer } from './Reducers/jobTypeReducer';

// Combine reducers
const reducer =  combineReducers({
    signIn : userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    
    loadJobs: loadJobReducer,
    singleJob: loadSingleJobReducer,
    registerJob: registerAjobReducer,
    updateJob: updateJobReducer,
    deleteJob: deleteJobReducer,
    
    userJobApplication: userApplyJobReducer,
    
    allUsers: allUserReducer,
    deleteUser: deleteUserReducer,
    updateUser: updateUserReducer,

    deleteJobHistory: deleteUserJobHistoryReducer,
    
    jobTypeAll: loadJobTypeReducer,
    createJobType: createJobTypeReducer,
    deleteJobType: deleteJobTypeReducer,
    updateJobType: updateJobTypeReducer
})

// Initial state
let InitialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}; 
const middleware = [thunk];
const store =createStore(reducer, InitialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;