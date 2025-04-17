import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { confirmJob, rejectJob } from '../../../Redux/Actoins/jobStatusAction';

const JobRequest = () => {
  const { userLoading, users } = useSelector((state) => state.allUsers);
  let _users = [];
  _users = users !== undefined && users.length > 0 ? users : [];

  console.log(_users);
  const palette = useTheme();

  const dispatch = useDispatch();

  const handleConfirm = (job__id) => {
    console.log(job__id);
    dispatch(confirmJob(job__id));
  };

  const handleReject = (job_id) => {
    dispatch(rejectJob(job_id));
  };

  return (
    <TableContainer component={Paper}>
       <Table>
         <TableHead >
           <TableRow>
             <TableCell>Job Title</TableCell>
             <TableCell>User</TableCell>
             <TableCell></TableCell>
             <TableCell>Status</TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
          {_users.map((user) => (
            <TableRow key={user._id}>
              {user.jobsHistory.map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                  <TableCell>{job.applicationStatus}</TableCell>
                  <TableCell>
                    <Button variant="contained" sx={{
                      backgroundColor: palette.main,
                      "&:hover": {
                        backgroundColor: palette.main,
                      },
                    }}
                    onClick={() => {handleConfirm(job._id)}}>Confirm</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained"  sx={{
                      backgroundColor: "red",
                      "&:hover": {
                        backgroundColor: "red",
                      },
                    }} onClick={handleReject(job._id)}>Reject</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobRequest;

// {_users.map((user) => (
//   <div key={user._id}>
//     <h2>{`${user.firstName} ${user.lastName}'s Jobs:`}</h2>
//     <ul>
//       {user.jobsHistory.map((job) => (
//         <li key={job._id}>
//           <strong>Title:</strong> {job.title},
//           <strong>Description:</strong> {job.description},
//           <strong>Salary:</strong> {job.salary},
//           <strong>Location:</strong> {job.location},
//           <strong>Status:</strong> {job.applicationStatus}
//         </li>
//       ))}
//     </ul>
//   </div>
// ))}
