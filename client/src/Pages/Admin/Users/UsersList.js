import React, { useEffect } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { allUserAction } from "../../../Redux/Actoins/userAction";
import { deleteUserAction } from "../../../Redux/Actoins/userAction";
import moment from "moment";
import Fab from "@mui/material/Fab";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

export function DashUsers() {
  const { palette } = useTheme();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUserAction());
  }, []);

  const { loading, users } = useSelector((state) => state.allUsers);
  let data = [];
  data = users !== undefined && users.length > 0 ? users : [];

  console.log(data);

  const deleteUserById = (e, id) => {
    console.log(id);
    dispatch(deleteUserAction(id));
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
          All Users
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left" width={160}>
                Email
              </StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">
                No. of applied jobs
              </StyledTableCell>
              <StyledTableCell align="left">
                List of applied jobs
              </StyledTableCell>
              <StyledTableCell align="center">Actoin</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.firstName}
                </StyledTableCell>
                <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.role === 1 ? "admin" : "Regular user"}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {moment(row.createdAt).format("YYYY-MM-DD HH:MM:SS")}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.jobsHistory.length === 0
                    ? "No Job"
                    : row.jobsHistory.length}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Tooltip title="show jobs">
                    {row.jobsHistory.length === 0 ? (
                      <IconButton disabled>
                        <VisibilityIcon
                          onClick={() => navigate(`/admin/users/${row._id}`)}
                        />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <VisibilityIcon
                          onClick={() => navigate(`/admin/users/${row._id}`)}
                        />
                      </IconButton>
                    )}
                  </Tooltip>
                  {/* <Button>
                    
                    <Link  to={`/admin/users/${row._id}`}>
                      Show jobs
                    </Link>
                  </Button> */}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {/* <Fab aria-label="delete" sx={{ backgroundColor: "red" }}>
                    <DeleteIcon
                      size="small"
                      onClick={(e) => deleteUserById(e, row._id)}
                      sx={{ color: "white" }}
                    />
                  </Fab> */}
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon
                        sx={{ color: "red", margin: 0 }}
                        onClick={(e) => deleteUserById(e, row._id)}
                        variant="contained"
                        color="error"
                      />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default DashUsers;
