import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box } from '@mui/material'
import notFound from '../Images/notFound.png';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ height : '83vh' }}>
        <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }} src={notFound} height={500} width={500} />
        <h1 style={{ textAlign: 'center', fontSize: "70px", marginTop: '-120px' }}> Page Not Found! </h1>
      </Box>
      <Footer />
    </>
  )
}

export default NotFound
