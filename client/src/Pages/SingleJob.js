import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import LoadingBox from "../Components/LoadingBox";
import Navbar from "../Components/Navbar";
import { singleJobLoadAction } from "../Redux/Actoins/jobAction";
import Button from "@mui/material/Button";
import { userApplyJobAction } from "../Redux/Actoins/userAction";
import SingleJobHeader from "../Components/SingleJobHeader";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import image from "../Images/jobbg.jpg";
import location from "../Images/location.png";
import salary from "../Images/salary.png";

const SingleJob = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();

  const { singleJob, loading } = useSelector((state) => state.singleJob);
  const { userInfo } = useSelector((state) => state.signIn);
  console.log('singleJob' , singleJob);

  const { id } = useParams(); // useParams will get the id from url
  useEffect(() => {
    dispatch(singleJobLoadAction(id));
  }, [id]);

  const [disabled, setDisabled] = React.useState(false)
  const applyForAJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob && singleJob.title,
        description: singleJob && singleJob.description,
        salary: singleJob && singleJob.salary,
        location: singleJob && singleJob.location,
      })
    );
    setDisabled(true);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa" }}>
        <Navbar />
        <SingleJobHeader />
        <Box>
          <Container sx={{ pt: "40px" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 4, p: 2 }}>
                {loading ? (
                  <LoadingBox />
                ) : (
                  <Card sx={{ width: 1100, padding: 5 }}>
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          {/* {console.log(userInfo)} */}
                          {userInfo.user.role === 1 ? (
                            <Button variant="contained" disabled>
                              Apply now
                            </Button>
                          ) : (
                            <Button
                              onClick={applyForAJob}
                              sx={{
                                fontSize: "13px",
                                backgroundColor: palette.main,
                                "&:hover": { backgroundColor: palette.main },
                              }}
                              variant="contained"
                              disabled={disabled}
                            >
                              <CheckCircleOutlineOutlinedIcon />
                              Apply now
                            </Button>
                          )}
                        </IconButton>
                      }
                      title={singleJob && singleJob.title}
                      subheader=""
                    />
                    <hr />

                    <CardMedia
                      component="img"
                      height="350"
                      image={image}
                      alt="Paella dish"
                      sx={{
                        padding: 2,
                        borderRadius: 10,
                      }}
                    />

                    <CardContent
                      sx={{
                        border: "1px solid gray",
                        padding: 2,
                        margin: 2,
                        borderRadius: 5,
                      }}
                    >
                      <Typography variant="h5" fontWeight={"bold"}>
                        Overview
                      </Typography>
                      <hr style={{ marginBottom: 25 }} />
                      <Typography
                        variant="body2"
                        sx={{ marginLeft: 3, marginBottom: 2, fontSize: 20 }}
                      >
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          <img src={salary} style={{ marginRight: 8 }} />
                          Salary
                        </Box>
                        : {singleJob && singleJob.salary} Rs.
                      </Typography>
                      {/* <Typography
                        variant="body2"
                        sx={{ marginLeft: 3, marginBottom: 2, fontSize: 20 }}
                      >
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          <img src={jobtype} style={{ marginRight: 8 }} />
                          Category
                        </Box>
                        :{" "}
                        {singleJob && singleJob.jobType
                          ? singleJob.jobType.jobTypeName
                          : "No category"}
                      </Typography> */}
                      <Typography
                        variant="body2"
                        sx={{ marginLeft: 3, marginBottom: 2, fontSize: 20 }}
                      >
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          <img src={location} style={{ marginRight: 8 }} />
                          Location
                        </Box>
                        : {singleJob && singleJob.location}
                      </Typography>
                    </CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontWeight="bold"
                      component="div"
                      marginTop={5}
                    >
                      Job description:
                    </Typography>
                    <Typography>
                      {singleJob && singleJob.description}
                    </Typography>

                    <hr />
                    <Typography>
                      <h2> Product Designer </h2>
                      <b>Product knowledge:</b> Deeply understand the technology
                      and features of the product area to which you are
                      assigned. Research: Provide human and business impact and
                      insights for products.
                      <br />
                      <br />
                      <b>Deliverables:</b> Create deliverables for your product
                      area (for example competitive analyses, user flows, low
                      fidelity wireframes, high fidelity mockups, prototypes,
                      etc.) that solve real user problems through the user
                      experience.
                      <br />
                      <br />
                      <b>Communication:</b> Communicate the results of UX
                      activities within your product area to the design team
                      department, cross-functional partners within your product
                      area, and other interested Superformula team members using
                      clear language that simplifies complexity.
                    </Typography>

                    <hr />
                    <CardActions>
                      {userInfo.user.role === 1 ? (
                        <Button variant="contained" disabled>
                          Apply now
                        </Button>
                      ) : (
                        <Button
                          onClick={applyForAJob}
                          sx={{
                            fontSize: "13px",
                            marginTop: "10px",
                            backgroundColor: palette.main,
                            "&:hover": { backgroundColor: palette.main },
                          }}
                          variant="contained"
                        >
                          <CheckCircleOutlineOutlinedIcon />
                          Apply now
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                )}
              </Box>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default SingleJob;
