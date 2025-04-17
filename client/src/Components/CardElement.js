import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CardElement = ({
  jobTitle,
  description,
  category,
  location,
  history,
  id,
  onDelete,
  role,
}) => {
  const { palette } = useTheme();
  return (
    <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 15, color: palette.main, fontWeight: 500 }}
          gutterBottom
        >
          <IconButton>
            <LocationOnIcon sx={{ color: palette.main, fontSize: 18 }} />
          </IconButton>{" "}
          {location}
        </Typography>
        <Typography variant="h5" component="div">
          {jobTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2">
          Description: {description}
          {/* Description: {description.split(" ").slice(0, 15).join(" ") + "..."} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          disableElevation
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          sx={{
            background: (theme) => theme.palette.main,
            "&:hover": {
              background: (theme) => theme.palette.main,
            },
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white", boxShadow: 0 }}
            to={`/job/${id}`}
          >
            More Details
          </Link>
        </Button>

        {history && (
          <Tooltip>
            <IconButton>
              <DeleteIcon
                sx={{ color: "red", mr: -255 }}
                onClick={onDelete}
                variant="contained"
                color="error"
              />
            </IconButton>
          </Tooltip>
        )}

        {/* {role && (
          <>
            <Button variant="contained">Confirm</Button>
            <Button variant="contained" sx={{alignItems: 'right'}}>Reject</Button>
          </>
        )} */}
      </CardActions>
    </Card>
  );
};

export default CardElement;
