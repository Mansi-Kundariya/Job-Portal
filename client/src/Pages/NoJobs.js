import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import noJobs from "../Images/noJobs.png";
import { Link } from "react-router-dom";

const NoJobs = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{ height: "70vh", textAlign: "center", position: "relative" }}>
      <Typography
        style={{
          fontFamily: "Times new roman",
          position: "absolute",
          top: "-8%",
          left: "51%",
          fontSize: "50px",
          fontWeight: "bold",
          marginTop: 80,
        }}
      >
        No Jobs
      </Typography>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
        }}
        src={noJobs}
        height={300}
        width={300}
      />
      <Typography
        variant="h1"
        style={{
          fontFamily: "Times new roman",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        {" "}
        Find your desire company and get your dream job?
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          background: palette.main,
          "&:hover": {
            background: palette.main,
          },
        }}
      >
        <Link
          to={"/joblist"}
          style={{ textDecoration: "none", color: palette.black }}
        >
          Job List
        </Link>
      </Button>
    </Box>
  );
};

export default NoJobs;
