import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Box, Typography, useTheme } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Person3Icon from "@mui/icons-material/Person3";
import logoDashboard from "../../Images/hr-project.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userLogoutAction,
  userProfileAction,
} from "../../Redux/Actoins/userAction";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const SidebarAdm = () => {
  const { userInfo } = useSelector((state) => state.signIn); // From store.js
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userProfileAction());
  });

  //log out
  const logOut = () => {
    dispatch(userLogoutAction());
    navigate("/");
    window.location.reload(true);
  };

  return (
    <>
      <Sidebar>
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Box
              sx={{ mt: 10, pb: 5, display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx= {{ marginLeft: 5, marginTop: 3 }}>

                  <Avatar
                    sx={{
                      ml : 3,
                      bgcolor: palette.main,
                      height: 60,
                      width: 60,
                      fontSize: 40,
                    }}
                  >
                    {userInfo && userInfo.user.role === 1 ? "A" : userInfo.user.firstName[0].toUpperCase()}
                  </Avatar>
                  <Typography sx={{ fontSize: 30, color: palette.dark}}> {userInfo && userInfo.user.role === 1 ? "Admin" : `${userInfo.user.firstName} ${userInfo.user.lastName}`}</Typography>
                </Box>

                {/* <img
                  style={{
                    width: "100px",
                    heigth: "100px",
                    textAlign: "center",
                    transition: "all ease-out .5s",
                  }}
                  src={logoDashboard}
                  alt="logo dashboard"
                /> */}
              </Box>
            </Box>

            <Menu
              menuItemStyles={{
                button: {
                  [`&.${menuClasses.button}`]: {
                    color: palette.main,
                    fontSize: 20,
                    marginTop: 6,
                  },
                  [`&.${menuClasses.disabled}`]: {
                    color: "green",
                  },
                  "&:hover": {
                    backgroundColor: palette.light,
                    borderRadius: 15,
                    width: 250,
                  },
                },

                icon: {
                  [`&.${menuClasses.icon}`]: {
                    color: palette.main,
                  },
                },
              }}
            >
              {userInfo && userInfo.user.role === 1 ? (
                <>
                  <MenuItem
                    component={<Link to="/admin/dashboard" />}
                    icon={<DashboardIcon />}
                  >
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/users" />}
                    icon={<GroupAddIcon />}
                  >
                    {" "}
                    Users{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/jobs" />}
                    icon={<WorkIcon />}
                  >
                    {" "}
                    Jobs{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/category" />}
                    icon={<CategoryIcon />}
                  >
                    {" "}
                    Category{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/jobrequest" />}
                    icon={<CategoryIcon />}
                  >
                    {" "}
                    Job Request{" "}
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    component={<Link to="/user/dashboard" />}
                    icon={<DashboardIcon />}
                  >
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/user/jobs" />}
                    icon={<WorkHistoryIcon />}
                  >
                    {" "}
                    Applied Jobs{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/user/info" />}
                    icon={<Person3Icon />}
                  >
                    {" "}
                    Personal Info{" "}
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
          <Box sx={{ pb: 2 }}>
            <Menu
              menuItemStyles={{
                button: {
                  [`&.${menuClasses.button}`]: {
                    color: palette.main,
                    fontSize: 20,
                  },

                  "&:hover": {
                    backgroundColor: palette.light,
                    borderRadius: 15,
                    color: palette.main,
                    width: 250,
                  },
                },

                icon: {
                  [`&.${menuClasses.icon}`]: {
                    color: palette.main,
                  },
                },
              }}
            >
              <MenuItem onClick={logOut} icon={<LoginIcon />}>
                {" "}
                Log out{" "}
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Sidebar>
    </>
  );
};

export default SidebarAdm;
