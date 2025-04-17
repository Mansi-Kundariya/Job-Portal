import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  setRef,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../../../Redux/Actoins/jobAction";
import { deleteJobAction } from "../../../Redux/Actoins/jobAction";
import CreateJob from "./CreateJob";
import UpdateJob from "../Jobs/UpdateJob";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function DashJobs() {
  const { palette } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobLoadAction());
  }, []);

  const { jobs, loading } = useSelector((state) => state.loadJobs);
  let data = [];
  data = jobs !== undefined && jobs.length > 0 ? jobs : [];

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [id, setId] = useState();
  const [selectedRow, setSelectedRow] = useState(null);

  const [edit, setEdit] = React.useState(false);
  const handleEdit = (e, id) => {
    setId(id);
    setEdit(true);
    const selected = data.find((row) => row._id === id);
    setSelectedRow(selected);
  };
  const handleCloseEdit = () => {
    setEdit(false);
  };

  //delete job by Id
  const deleteJobById = (e, id) => {
    dispatch(deleteJobAction(id));
    window.location.reload();
  };

  return (
    <>
      <Box sx={{ pb: 2 }}>
        <Typography
          variant="h4"
          sx={{
            color: palette.dark,
            ml: 3,
            pb: 3,
            fontWeight: "bold",
            float: "left",
          }}
        >
          Job List
        </Typography>
        {/* <Fab color= "secondary" aria-label="delete" sx={{ float: 'right' }}>
                      <AddIcon
                        size="small"
                        onClick={handleClickOpen}
                      />
                    </Fab> */}
        <Button
          variant="contained"
          sx={{
            float: "right",
            backgroundColor: palette.main,
            "&:hover": { backgroundColor: palette.main },
          }}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          style={{ color: palette.dark, textDecoration: "none" }}
        >
          Add Job
        </Button>

        <CreateJob open={open} onClose={handleClose} />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={160}>Title</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Available</StyledTableCell>
              <StyledTableCell align="center">Salary</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Actoin</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.jobType.jobTypeName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.available === true ? "Available" : "Not available"}
                </StyledTableCell>
                <StyledTableCell align="center">{row.salary}</StyledTableCell>
                <StyledTableCell align="center">{row.location}</StyledTableCell>
                <StyledTableCell align="center">
                    {/* <Fab aria-label="edit" sx={{ marginRight: 3, backgroundColor: palette.main}}>
                      <EditIcon
                        size="small"
                        onClick={(e) => handleEdit(e, row._id)}
                        sx={{color: palette.white}}
                      />
                    </Fab>
                    <Fab aria-label="delete" sx={{ backgroundColor: 'red' }}>
                      <DeleteIcon
                        size="small"
                        onClick={(e) => handleEdit(e, row._id)}
                        sx={{color: 'white'}}
                      />
                    </Fab> */}
                  <Tooltip title="Edit">
                    <IconButton>
               <EditIcon onClick={(e) =>handleEdit(e, row._id)} sx={{ color: palette.main}} />
             </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon
                        sx={{ color: "red", marginLeft: 3 }}
                        onClick={(e) => deleteJobById(e, row._id)}
                        variant="contained"
                        color="error"
                      />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {selectedRow && (
              <UpdateJob
                row={selectedRow}
                open={edit}
                onClose={handleCloseEdit}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default DashJobs;
