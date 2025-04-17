import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HeaderTop = () => {
 
  const { palette } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          background: palette.white
        }}
      >
        <Toolbar>
        <Button
            variant="text"
            href="/"
          >
            Home
          </Button>
          <Button
            variant="text"
            href="/joblist"
          >
            Job
          </Button>
          <Button
            variant="text"
            href="/about"
          >
            About
          </Button>
          <Button
            variant="text"
            href="/login"
            sx={{ ml: 136 }}
          >
            <ArrowBackIosIcon />
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderTop;
