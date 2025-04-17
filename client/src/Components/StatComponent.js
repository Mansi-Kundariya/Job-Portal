import {
  Card,
  CardContent,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const StatComponent = ({ value, icon, description, money }) => {
  const { palette } = useTheme();
  return (
    <>
      <Card sx={{ bgcolor: palette.white, width: "100%" }}>
        <CardContent sx={{ float: 'left'}}>
          <Typography
            variant="h4"
            sx={{ color: palette.main, mb: "1px", fontWeight: 700 }}
          >
            {money !== "" ? money + value : value}
          </Typography>
          <Typography variant="title" sx={{ color: palette.main, mb: 0 }}>
            {description}
          </Typography>
        </CardContent>
        <CardContent sx={{ float: 'right'}}>
        <IconButton sx={{ bgcolor: palette.main, mb: 2 }}>{icon}</IconButton>
        </CardContent>
      </Card>
    </>
  );
};

export default StatComponent;
