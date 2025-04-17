import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  jobTypeLoadAction,
  deleteJobCategoryAction,
} from "../../../Redux/Actoins/jobTypeAction";
import CreateCategory from "./CreateCaregory";
import UpdateCategory from "./UpdateCaregory";

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

export function DashCategory() {
  const { palette } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const { jobType, loading } = useSelector((state) => state.jobTypeAll);
  let data = [];
  data = jobType !== undefined && jobType.length > 0 ? jobType : [];

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
    window.location.reload();
  };

  //delete job by Id
  const deleteJobCategoryById = (e, id) => {
    dispatch(deleteJobCategoryAction(id));
    window.location.reload(); /* remaining to change  */
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
          Job category
        </Typography>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            float: "right",
            backgroundColor: palette.main,
            "&:hover": { backgroundColor: palette.main },
            color: palette.dark,
            textDecoration: "none",
          }}
          startIcon={<AddIcon />}
        >
          Add category
        </Button>
      </Box>
      <CreateCategory open={open} onClose={handleClose} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={200}>Category</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.jobTypeName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {moment(row.createdAt).format("YYYY-MM-DD HH:MM:SS")}
                </StyledTableCell>
                <StyledTableCell align="right">
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
                        onClick={(e) => deleteJobCategoryById(e, row._id)}
                        sx={{color: 'white'}}
                      />
                    </Fab> */}
                  <Tooltip title="Edit">
                    <IconButton>
                      <EditIcon
                        sx={{ color: palette.main }}
                        onClick={(e) => handleEdit(e, row._id)}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon
                        sx={{ color: "red", marginLeft: 3 }}
                        onClick={(e) => deleteJobCategoryById(e, row._id)}
                        variant="contained"
                        color="error"
                      />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {selectedRow && (
              <UpdateCategory
                row={selectedRow}
                id={id}
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
export default DashCategory;
