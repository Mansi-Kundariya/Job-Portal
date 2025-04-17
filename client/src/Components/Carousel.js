import React from "react";
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { theme } from '../theme';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../Redux/Actoins/jobAction";
import {  useParams } from "react-router-dom";
import { jobTypeLoadAction } from "../Redux/Actoins/jobTypeAction";

const sliderStyle = {
  width: '100%',
  marginTop: 60,
  marginBottom: 150
};

const slideStyle = {
  marginTop: '20px'
};

const buttonStyle = {
  backgroundColor: theme.palette.main,
  color: 'white',
  fontSize: '1rem',
  padding: '10px',
  borderRadius: '10px',
  "&:hover": {
    backgroundColor: theme.palette.dark,
    color: theme.palette.white,
  }
};

const iconStyle = {
  marginLeft:'5%', 
  marginTop: '10%', 
  color: theme.palette.main,
  height: 50,
  width: 50
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div style={sliderStyle}>
      <div style={slideStyle}>
        <Slider {...settings}>
          <Card sx={{ maxWidth: 345 }}>
      <WorkOutlineOutlinedIcon sx={iconStyle} />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
          Frontend
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Code with Creativity: Frontend Development Opportunities Await.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={buttonStyle} href="/search/frontend">Search</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
    <WorkOutlineOutlinedIcon sx={iconStyle} />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
          Backend
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Redefining Data Dynamics: Join Our Backend Engineering Team.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={buttonStyle} href="/search/backend">Search</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
    <WorkOutlineOutlinedIcon sx={iconStyle} />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
          DevOps
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Driving Efficiency in Every Line of Code: Explore DevOps Roles
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={buttonStyle} href="/search/devops">Search</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
    <WorkOutlineOutlinedIcon sx={iconStyle} />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
          Business Marketing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        From Market Research to Market Domination: Your Marketing Career Awaits.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={buttonStyle} href="/search/business">Search</Button>
      </CardActions>
    </Card>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
