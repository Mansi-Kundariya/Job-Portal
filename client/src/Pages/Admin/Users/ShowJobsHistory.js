import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardElement from "../../../Components/CardElement";
import { Typography, useTheme } from "@mui/material";

export function ShowJobsHistory() {
  const { palette } = useTheme();

  const { userInfo } = useSelector((state) => state.signIn);
  const role = userInfo.user.role

  const { loading, users } = useSelector((state) => state.allUsers);
  let data = [];
  data = users !== undefined && users.length > 0 ? users : [];

  const { userId } = useParams(); 

  const user = data.find(user => user._id === userId)
  const jobs = user.jobsHistory
  console.log(jobs)

  return (
    <>
    { jobs && jobs.length === 0 ? <Typography variant="h3" sx={{ marginTop:30, fontWeight: 'bold', color: palette.main, textAlign: 'center'}}>No Jobs</Typography> : 
                jobs.map((job, i) => (
                  <>
                  <CardElement
                    key={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={job.category}
                    location={job.location}
                    history={false}
                    role={role}
                  />
                  
                </>
                ))}
    </>
  );
}
export default ShowJobsHistory;
