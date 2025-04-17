import { CONFIRM_JOB, REJECT_JOB } from './actionTypes';

const initialState = {
  jobs: [], // You may fetch the jobs from MongoDB and store them here
};

const jobReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case CONFIRM_JOB:
      // Update the job status to 'confirm' in the state
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job._id === action.payload.jobId ? { ...job, status: 'confirm' } : job
        ),
      };

    case REJECT_JOB:
      // Update the job status to 'rejected' in the state
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job._id === action.payload.jobId ? { ...job, status: 'rejected' } : job
        ),
      };

    default:
      return state;
  }
};

export default jobReducer;