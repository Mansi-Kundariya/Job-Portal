import React from "react";
import { Box, Typography, styled } from "@mui/material";
import HeaderImage from "../Images/hero.png";
import SearchInputEl from "../Components/SearchInputEl";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import { useTheme } from "@emotion/react";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Header = () => {
  const { palette } = useTheme();

  const titleStyle = {
    paddingTop: 10,
  };

  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 700,
    backgroundSize: 700,
    backgroundImage: `url(${HeaderImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundColor: "#e2f9ee",
  }));

  return (
    <Paper
      sx={{
        p: 10,
        height: 750,
        maxWidth: "100%",
        backgroundColor: palette.light,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h2"
                fontWeight="bold"
                component="div"
                sx={titleStyle}
              >
                The <span style={{ color: palette.main }}>Easiest Way</span>{" "}
                <br />
                to Get Your New Job
              </Typography>
              <Typography variant="h5">
                Good Life Begins With A Good Company
              </Typography>
              <Box sx={{ marginTop: 5 }} />
              <Typography
                variant="subtitle"
                fontSize={20}
                color="text.secondary"
              >
                With the largest online creative community, search for open positions, get personalized salary estimates, and read company reviews worldwide. <br/> The right job is out there.
              </Typography>
              <SearchInputEl />
            </Grid>

            {/* <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>

        <Grid item>
          <ButtonBase sx={{ height: 750 }}>
            <Img alt="complex" src={HeaderImage} height={500} />
          </ButtonBase>
        </Grid>
      </Grid>
    </Paper>

    // <Box>
    // <Box>
    //   <Typography variant='h2' sx={{ color: "red"}}>Good Life Begins With A Good Company</Typography>
    // </Box>
    // <StyleHeader />
    //     {/* <SearchInputEl /> */}
    // </Box>
  );
};

export default Header;
