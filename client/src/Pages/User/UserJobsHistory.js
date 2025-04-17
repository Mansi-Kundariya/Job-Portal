import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CardElement from "../../Components/CardElement";
import { deleteUserJobHistoryAction } from "../../Redux/Actoins/userAction";
import { useDispatch } from "react-redux";
import  NoJobs  from "../NoJobs";

const UserJobsHistory = () => {
  const { user } = useSelector((state) => state.userProfile);
  console.log(user);
  const dispatch = useDispatch();

  const deleteJobHistoryById = (userId, jobId) => {
    dispatch(deleteUserJobHistoryAction(userId, jobId));
    window.location.reload();
  };

  return (
    <>
      <Box>
        {user !== null && user.jobsHistory.length === 0 ? (
          <NoJobs />
        ) : (
          <>
            <Typography variant="h4">Job history</Typography>
            <Box>
              {user &&
                user.jobsHistory.map((history, i) => (
                  <CardElement
                    key={i}
                    id={history._id}
                    jobTitle={history.title}
                    description={history.description}
                    category=" "
                    location={history.location}
                    history={true}
                    onDelete={() => deleteJobHistoryById(user._id, history._id)}
                  />
                ))}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default UserJobsHistory;
