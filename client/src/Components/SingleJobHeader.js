import React from "react";
import { Box, Paper, Typography, styled } from "@mui/material";
import HeaderImage from "../Images/hero.png";
import SearchInputEl from "../Components/SearchInputEl";
import { useTheme } from "@emotion/react";
import CardContent from "@mui/material/CardContent";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const SingleJobHeader = () => {
  const { palette } = useTheme();

  return (
    <Paper
      sx={{
        width: "100%",
        marginTop: 9,
        backgroundColor: palette.light,
        textAlign: "center",
        paddingTop: 7,
        paddingBottom: 7,
        display: "flex",
      }}
    >
      {/* <Img src={HeaderImage} height={250}  /> */}
      <CardContent>
        <Typography
          gutterBottom
          marginLeft={60}
          variant="h2"
          fontWeight={"bold"}
          component="div"
          color={palette.dark}
        >
          Job Details
        </Typography>
        <Typography
          variant="h6"
          marginTop={-3}
          marginLeft={60}
          color="text.secondary"
        >
          Here will be your company job details & requirements
        </Typography>
      </CardContent>
      {/* <Img src={HeaderImage} height={250} /> */}
    </Paper>
  );
};

export default SingleJobHeader;
