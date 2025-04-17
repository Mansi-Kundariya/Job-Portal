import React from "react";
import { Box, Paper, Typography, styled } from "@mui/material";
import HeaderImage1 from "../Images/jobDetails1.png";
import HeaderImage2 from "../Images/jobDetails2.png";
import SearchInputEl from "../Components/SearchInputEl";
import { useTheme } from "@emotion/react";
import CardContent from "@mui/material/CardContent";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const JobHeader = () => {
  const { palette } = useTheme();

  return (
    <Paper
      sx={{
        width: "100%",
        marginTop: 3,
        backgroundColor: palette.light,
        textAlign: "center",
        paddingTop: 7,
        display: "flex",
      }}
    >
      <Img src={HeaderImage1} height={300} sx={{ marginLeft: 10}} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          fontWeight={"bold"}
          marginTop= {6}
          component="div"
          color={palette.dark}
        >
          Job Listing
        </Typography>
        <Typography
          variant="h6"
          marginTop={-3}
          marginLeft={6}
          color="text.secondary"
        >
          We delivered blazing fast & striking work solution
        </Typography>
        <Box sx={{ width: 700, marginLeft: "15%", borderRadius: 2 }}>
          <SearchInputEl />
        </Box>
      </CardContent>
      <Img src={HeaderImage2} height={390} sx={{ marginBottom: -11.5}}/>
    </Paper>
  );
};

export default JobHeader;
