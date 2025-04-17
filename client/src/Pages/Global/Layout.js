import React from 'react';
import { Box, useTheme } from '@mui/material';
import HeaderTop from './HeaderTop';
import SidebarAdm from './Sidebar';
import Header from '../../Components/Navbar';

// HOC - Higher order component
const Layout = (Component) => ({ ...props }) => { 


  return (
    <>
      <div style={{ display: 'flex', minHeight: "100vh" }}>
            <Header sx={{  }} />
        <SidebarAdm />
        <Box sx={{ width: "100%", marginTop: 9, bgcolor: (theme) =>theme.palette.light }}>
            {/* <HeaderTop /> */}
            <Box sx={{ p:3 }}>
                <Component {...props} />
            </Box>
        </Box>
      </div>
    </>
  )
}

export default Layout
