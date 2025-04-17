import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import {
  Box,
  Button,
  Container,
  Dialog,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Footer from "../Components/Footer";
import { useTheme } from "@emotion/react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import image from "../Images/home.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Carousel from "../Components/Carousel";
import Register from "./Register";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: 650,
  height: 600,
  marginTop: -100,
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const titleStyle = {
  fontFamily: "--eb_garamond-font",
  fontWeight: "bold",
  color: "black",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
};

const hrStyles = {
  content: '""',
  flex: "1 1",
  borderBottom: "1px solid",
  margin: "auto",
};

const titleBeforeStyles = {
  ...hrStyles,
  marginRight: "30px",
};

const titleAfterStyles = {
  ...hrStyles,
  marginLeft: "30px",
};

const Home = () => {
  const { palette } = useTheme();

  const [openLogin, setOpenLogin] = React.useState(false);
  const handleClickOpenLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };
  const [openRegister, setOpenRegister] = React.useState(false);
  const handleClickOpenRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />

        {/* ----------------------------- How Its Work ? ----------------------------- */}

        <Container sx={{ padding: 8 }}>
          <Box style={titleStyle}>
            <span style={titleBeforeStyles}></span>
            <Typography variant="h2" sx={titleStyle}>
              How its work ?
            </Typography>
            <span style={titleAfterStyles}></span>
          </Box>

          <Box sx={{ flexGrow: 1, padding: 10 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Item>
                  <Button
                    sx={{
                      backgroundColor: palette.main,
                      color: palette.white,
                      borderRadius: 3,
                      padding: 1.5,
                      "&:hover": {
                        backgroundColor: palette.main,
                        color: palette.white,
                      },
                    }}
                  >
                    01
                  </Button>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: 2,
                      fontWeight: "bold",
                      color: palette.dark,
                    }}
                  >
                    Create Account
                  </Typography>
                  <Typography>
                    It’s very easy to open an account and start your journey.
                  </Typography>
                </Item>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Item>
                  <Button
                    sx={{
                      backgroundColor: palette.main,
                      color: palette.white,
                      borderRadius: 3,
                      padding: 1.5,
                      "&:hover": {
                        backgroundColor: palette.main,
                        color: palette.white,
                      },
                    }}
                  >
                    02
                  </Button>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: 2,
                      fontWeight: "bold",
                      color: palette.dark,
                    }}
                  >
                    Complete your profile
                  </Typography>
                  <Typography>
                    Complete your profile with all the info to get attention of
                    client.
                  </Typography>
                </Item>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Item>
                  <Button
                    sx={{
                      backgroundColor: palette.main,
                      color: palette.white,
                      borderRadius: 3,
                      padding: 1.5,
                      "&:hover": {
                        backgroundColor: palette.main,
                        color: palette.white,
                      },
                    }}
                  >
                    03
                  </Button>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: 2,
                      fontWeight: "bold",
                      color: palette.dark,
                    }}
                  >
                    Apply job or hire
                  </Typography>
                  <Typography>
                    Apply & get your preferable jobs with all the requirements &
                    get it.
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>

          <hr />
        </Container>

        {/* -------------------- Get the job of your dreams quickly. --------------------- */}

        <Container>
          <Grid container marginBottom={4}>
            <Grid item>
              <ButtonBase>
                <Img alt="complex" src={image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="text.secondary"
                    sx={{ marginTop: 5 }}
                  >
                    Millions Of Jobs.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontWeight="bold"
                  >
                    Find The One That’s{" "}
                    <span style={{ color: palette.main }}> Right </span> For You
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Get the job of your dreams quickly.
                  </Typography>
                  <Grid item>
                    <Typography>
                      <CheckCircleIcon sx={{ marginRight: 1.5 }} />
                      Seamless searching
                    </Typography>
                    <Typography>
                      <CheckCircleIcon sx={{ marginRight: 1.5 }} />
                      Protected payments, every time
                    </Typography>
                    <Typography>
                      <CheckCircleIcon sx={{ marginRight: 1.5 }} />
                      Wide rang of job categories
                    </Typography>
                  </Grid>
                  <Button
                    sx={{
                      backgroundColor: palette.main,
                      color: palette.white,
                      marginTop: 4,
                      padding: 1.5,
                    }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* -------------------- Filter by category --------------------- */}

        <Container>
          <Box style={titleStyle}>
            <span style={titleBeforeStyles}></span>
            <Typography variant="h2" sx={titleStyle}>
              Most demanding job categories.
            </Typography>
            <span style={titleAfterStyles}></span>
          </Box>
          <Carousel />
        </Container>

        {/* --------------------   Most complete job portal. --------------------- */}

        <Container> 

          <hr />

          <Grid container spacing={2} sx={{ marginTop: 10, marginBottom: 10}}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Typography variant="h2" fontWeight="bold" component="div">
                  Most complete job portal.
                </Typography>
                <Typography variant="h6">
                  Signup and start find your job or talents.
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{ marginRight: 8, padding: 2, color: palette.main }}
                href="/joblist"
              >
                Looking For Job?
              </Button>
              <Button
              onClick={handleClickOpenRegister}
                variant="contained"
                sx={{ padding: 2, backgroundColor: palette.main,"&:hover": {
                  backgroundColor: palette.dark,
                  color: palette.white,
                } }}
              >
                Sign Up
              </Button>
              <Register
            open={openRegister}
            onClose={handleCloseRegister}
            onLoginClick={handleClickOpenLogin}
          />
            </Grid>
          </Grid>

        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
