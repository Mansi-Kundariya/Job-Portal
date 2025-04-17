import React from 'react'
import StatComponent from '../../../Components/StatComponent'
import { Box, Stack, Typography, useTheme } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from "react-google-charts";
import { data, options } from '../data/data'
import ChartComponent from '../../../Components/ChartComponent';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const { palette } = useTheme();

  const { userLoading, users } = useSelector((state) => state.allUsers);
  let _users = [];
  _users = users !== undefined && users.length > 0 ? users : [];

  const { jobs, jobLoading } = useSelector((state) => state.loadJobs);
  let _jobs = [];
  _jobs = jobs !== undefined && jobs.length > 0 ? jobs : [];
  
  const { jobType, jobTypeLoading } = useSelector((state) => state.jobTypeAll);
  let _jobType = [];
  _jobType = jobType !== undefined && jobType.length > 0 ? jobType : [];
  console.log(_jobType)

  return (
    <>
            <Box>
                <Typography variant="h4" sx={{ color: palette.main, pb: 3, fontWeight: "bold"}}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value={_users.length}
                        icon={<SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Users"
                        money=''
                    />
                    <StatComponent
                        value={_jobs.length}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                    />
                    <StatComponent
                        value={_jobType.length}
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
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
  )
}

export default AdminDashboard
