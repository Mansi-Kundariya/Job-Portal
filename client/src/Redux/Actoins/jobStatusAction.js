import axios from "axios";
import { toast } from "react-toastify";
import { CONFIRM_JOB, REJECT_JOB } from "../Constants/jobStatusConstants";

export const confirmJob = (jobId) => async (dispatch) => {
  dispatch({type: CONFIRM_JOB});
  const { data } = await axios.put(``)
};

export const rejectJob = (jobId) => ({
  type: REJECT_JOB,
  payload: { jobId },
});
