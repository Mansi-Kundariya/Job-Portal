import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Button,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../Redux/Actoins/jobAction";
import { Link, useParams } from "react-router-dom";
import CardElement from "../Components/CardElement";
import Footer from "../Components/Footer";
import LoadingBox from "../Components/LoadingBox";
import SelectComponent from "../Components/SelectComponent";
import { jobTypeLoadAction } from "../Redux/Actoins/jobTypeAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import JobHeader from "../Components/JobHeader";
// import { Scrollbars } from 'react-custom-scrollbars';

const JobList = () => {
  // const { jobs, setUniqueLocation, pages=3 , loading } = useSelector(
  //   (state) => state.loadJobs
  // );

  const { jobs, setUniqueLocation, loading } = useSelector(
    (state) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  // For show all jobtype category name in drop-down list
  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <JobHeader />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ p: 2, paddingTop: 10 }}>
              <Typography
                sx={{
                  color: palette.dark,
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Advance Filter
              </Typography>

              <hr />

              <Card
                sx={{
                  minWidth: 150,
                  mb: 3,
                  mt: 5,
                  p: 2,
                  backgroundColor: palette.light,
                }}
              >
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.dark, fontWeight: 600, fontSize: 20 }}
                  >
                    Category
                  </Typography>
                </Box>
                <SelectComponent
                  handleChangeCategory={handleChangeCategory}
                  cat={cat}
                />

                <hr style={{ marginTop: 40, marginBottom: 30 }} />
                {/* </Card> */}

                {/* <Card
                sx={{
                  minHeight: 150,
                  mb: 3,
                  mt: 3,
                  p: 2,
                  backgroundColor: palette.light,
                }}
              > */}
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component={"h4"}
                    sx={{ color: palette.dark, fontWeight: 600, fontSize: 20 }}
                  >
                    Location
                  </Typography>

                  <MenuList>
                    {setUniqueLocation &&
                      setUniqueLocation.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            <LocationOnIcon sx={{ fontSize: 18 }} />
                          </ListItemIcon>
                          <Link
                            style={{
                              textDecoration: "none",
                              color: palette.black,
                            }}
                            to={`/search/location/${location}`}
                          >
                            {location}
                          </Link>
                        </MenuItem>
                      ))}
                  </MenuList>
                </Box>

                <Button
                  sx={{
                    fontWeight: "bold",
                    width: 265,
                    fontSize: 18,
                    padding: 1,
                    backgroundColor: palette.dark,
                    color: palette.white,
                    "&:hover": {
                      backgroundColor: palette.dark,
                      color: palette.white,
                    },
                  }}
                  href="/joblist"
                >
                  {" "}
                  Reset
                </Button>
              </Card>
            </Box>

            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : jobs && jobs.length === 0 ? (
                <>
                  <Box
                    sx={{
                      minHeight: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2>No Result Found !</h2>
                  </Box>
                </>
              ) : (
                // <Scrollbars style={{ width: 900, height: "100%" }}>
                jobs &&
                jobs.map((job, i) => (
                  <CardElement
                    key={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={job.category}
                    location={job.location}
                    history={false}
                  />
                ))
                // </Scrollbars>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default JobList;
