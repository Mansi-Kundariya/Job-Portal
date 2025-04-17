import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import UpdateUser from "./UpdateUser";

const UserInfoDashboard = () => {
  const { user } = useSelector((state) => state.userProfile);
  var id = "";
  if (user !== null) {
    id = user._id;
  }

  const { palette } = useTheme();

  const [edit, setEdit] = React.useState(false);
  const handleEdit = () => {
    setEdit(true);
  };
  const handleCloseEdit = () => {
    setEdit(false);
  };

  return (
    <>
      <Box sx={{ maxWidth: "100%", margin: 3, mt: 15 }}>
        <Card sx={{ padding: 2, borderRadius: 3 }}>
          <CardHeader
            title="Personal Info"
            subheader=""
            sx={{ textAlign: "left", fontWeight: 'bold' }}
          />
          <hr />

          <CardContent>
            <Typography
              variant="body2"
              sx={{ marginLeft: 5, marginBottom: 2, fontSize: 20 }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                First name :
              </Box>{" "}
              {user && user.firstName}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginLeft: 5, marginBottom: 2, fontSize: 20 }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                Last name :
              </Box>{" "}
              {user && user.lastName}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginLeft: 5, marginBottom: 2, fontSize: 20 }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                E-mail :
              </Box>{" "}
              {user && user.email}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            sx={{
              float: 'right',
              mr: 5,
              backgroundColor: palette.main,
              "&:hover": { backgroundColor: palette.main },
            }}
            onClick={handleEdit}
          >
            Update
          </Button>
          {user !== null && <UpdateUser user={user} open={edit} onClose={handleCloseEdit}/> }
        </Card>
      </Box>
    </>
  );
};

export default UserInfoDashboard;
