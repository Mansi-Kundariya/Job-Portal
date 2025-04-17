import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';
import UserRoute from './Components/UserRoute';
import AdminRoute from './Components/AdminRoute';
import Layout from './Pages/Global/Layout';
import UserDashboard from './Pages/User/UserDashboard';
import UserJobsHistory from './Pages/User/UserJobsHistory';
import UserInfoDashboard from './Pages/User/UserInfoDashboard';
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard';
import DashUsers from './Pages/Admin/Users/UsersList';
import DashUsersJobHistory from './Pages/Admin/Users/ShowJobsHistory';
import DashJobs from './Pages/Admin/Jobs/JobList';
import SingleJob from './Pages/SingleJob';
import JobList from './Pages/JobList';
import Register from './Pages/Register';
import DashCategory from './Pages/Admin/Category/CategoryList';
import JobCreate from './Pages/Admin/Jobs/CreateJob';
import JobUpdate from './Pages/Admin/Jobs/UpdateJob';
import CreateCategory from './Pages/Admin/Category/CreateCaregory';
import UpdateCaregory from './Pages/Admin/Category/UpdateCaregory';
import JobRequest from './Pages/Admin/JobRequest/JobRequest';

// HOC - Higher order component
const UserDashboardHOC = Layout(UserDashboard)
const UserJobsHistoryHOC = Layout(UserJobsHistory)
const UserInfoDashboardHOC = Layout(UserInfoDashboard)
const AdminDashboardHOC = Layout(AdminDashboard)
const DashUsersHOC = Layout(DashUsers)
const DashUsersJobHistoryHOC = Layout(DashUsersJobHistory)
const DashJobsHOC = Layout(DashJobs)
const JobCreateHOC = Layout(JobCreate)
const JobUpdateHOC = Layout(JobUpdate)
const DashCategoryHOC = Layout(DashCategory)
const CreateCategoryHOC = Layout(CreateCategory)
const UpdateCategoryHOC = Layout(UpdateCaregory)
const JobRequestHOC= Layout(JobRequest)

const App = () => {
  return (
    <>
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/joblist' element={<JobList/>}/>
        <Route path='/search/location/:location' element={<JobList/>}/>
        <Route path='/search/:keyword' element={<JobList/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />} />

        <Route path='/job/:id' element={<SingleJob/>}/>

        <Route path='/admin/dashboard' element= {<AdminDashboardHOC />} />

        <Route path='/admin/users' element= {<DashUsersHOC />} />
        <Route path='/admin/users/:userId' element= {<DashUsersJobHistoryHOC />} />

        <Route path='/admin/jobs' element= {<DashJobsHOC />} />
        <Route path='/admin/job/create' element= {<JobCreateHOC />} />
        <Route path='/admin/update/job/:job_id' element={<JobUpdateHOC/>}/>

        <Route path='/admin/category' element={<DashCategoryHOC />} />
        <Route path='/admin/category/create' element={<CreateCategoryHOC />} />
        <Route path='/admin/category/update/:id' element={<UpdateCategoryHOC />} />

        <Route path='/admin/jobrequest' element={<JobRequestHOC />} />

        <Route path='/user/dashboard' element={<UserRoute> <UserDashboardHOC /> </UserRoute>} />
        <Route path='/user/jobs' element= {<UserRoute> <UserJobsHistoryHOC /> </UserRoute>} />
        <Route path='/user/info' element= {<UserRoute> <UserInfoDashboardHOC /> </UserRoute>} />

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App