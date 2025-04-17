import "../App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../Images/logo.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../Redux/Actoins/userAction";
import { toast } from "react-toastify";
import { Dialog } from "@mui/material";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.signIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();

  const goBack = () => {
    window.history.back();
  };

  const [openLogin, setOpenLogin] = React.useState(false);
  const handleClickOpenLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const [openRegister, setOpenRegister] = React.useState(false);
  const handleClickOpenRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const handleCloseHomeMenu = () => {
    navigate("/");
  };

  const handleCloseJobMenu = () => {
    navigate("/joblist");
  };

  const handleCloseDashboardMenu = () => {
    if (userInfo == null) {
      toast.error("You must login first");
      setOpenLogin(true);
      <Dialog open={openLogin}>
        <Login onCloseLogin={handleCloseLogin} />
      </Dialog>;
    } else {
      if (userInfo.user.role === 1) {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
  };

  // Logout user
  const logoutUser = () => {
    dispatch(userLogoutAction());
    navigate("/");
    window.location.reload(true);
  };

  return (
    <AppBar position="fixed" style={{ background: palette.white }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ArrowBackIosIcon onClick={goBack} sx={{cursor: "pointer"}} />

          <img src={logo} width={180} />

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              },
            }}
          >
            <Button
              onClick={handleCloseHomeMenu}
              sx={{
                my: 2,
                display: "block",
                alignItems: "center",
                color: palette.black,
              }}
            >
              Home
            </Button>

            <Button
              onClick={handleCloseJobMenu}
              sx={{
                my: 2,
                display: "block",
                alignItems: "center",
                color: palette.black,
              }}
            >
              Job
            </Button>

            <Button
              onClick={handleCloseDashboardMenu}
              sx={{
                my: 2,
                display: "block",
                alignItems: "center",
                color: palette.black,
              }}
            >
              Dashboard
            </Button>
          </Box>

          {!userInfo ? (
            <Button
              onClick={handleClickOpenLogin}
              sx={{
                mr: 2,
                my: 2,
                color: palette.main,
                fontWeight: "bold",
                fontSize: 16,
                display: "block",
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={logoutUser}
              sx={{
                mr: 2,
                my: 2,
                color: palette.main,
                fontWeight: "bold",
                fontSize: 16,
                display: "block",
              }}
            >
              Logout
            </Button>
          )}

          <Login
            open={openLogin}
            onClose={handleCloseLogin}
            onRegistrationClick={handleClickOpenRegister}
          />

          <Button
            onClick={handleClickOpenRegister}
            variant="contained"
            sx={{
              mr: 2,
              my: 2,
              color: palette.white,
              fontWeight: "bold",
              fontSize: 16,
              display: "block",
              backgroundColor: palette.main,
              "&:hober": {
                backgroundColor: palette.main,
              },
            }}
          >
            Register
          </Button>

          <Register
            open={openRegister}
            onClose={handleCloseRegister}
            onLoginClick={handleClickOpenLogin}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
