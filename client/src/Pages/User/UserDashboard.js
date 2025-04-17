import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import StatComponent from "../../Components/StatComponent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import { useSelector } from "react-redux";
import moment from "moment";
import ChartComponent from "../../Components/ChartComponent";
import { Chart } from "react-google-charts";
import { data, options } from '../Admin/data/data';
  
const UserDashboard = () => {
  const { user } = useSelector((state) => state.userProfile);
  const { palette } = useTheme();

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{ color: palette.dark, pb: 3, fontWeight: "bold" }}
        >
          Dashboard
        </Typography>
         
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value={user && moment(user.createdAt).format(" DD / MM / YYYY ")}
            icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Created At"
            money=" "
          />

          <StatComponent
            value={user && user.jobsHistory.length}
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs"
            money=" "
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3}}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <ChartComponent>
                        <Chart
                            chartType="Bar"
                            data={data}
                            options={options}
                            width="100%"
                            height="300px"
                            legendToggle
                        />
                    </ChartComponent>
                </Stack>
      </Box>
      </>
  );
};

export default UserDashboard;