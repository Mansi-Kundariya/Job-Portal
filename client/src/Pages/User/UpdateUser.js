import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserAction,
  userSignUpAction,
} from "../../Redux/Actoins/userAction";
import { useParams } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .min(3, "First Name should be of minimum 3 characters length")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .min(3, "Last Name should be of minimum 3 characters length")
    .required("Last Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const UpdateUser = ({ user, open, onClose }) => {
  const { palette } = useTheme();

  // const _user = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(updateUserAction(user._id, values));
      actions.resetForm();
      onClose();
      window.location.reload();
    },
  });

  return (
    <Dialog open={open}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>
          <Typography
            variant="h5"
            component="h2"
            type="submit"
            sx={{
              marginLeft: 5,
              marginRight: 5,
              textAlign: "center",
              color: palette.main,
              fontWeight: "bold",
              fontSize: 35,
            }}
          >
            Update Profile
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            sx={{
              mt: 1,
              mb: 3,
              "& .MuiInputBase-root": {
                color: 'black',
              },
              fieldset: { borderColor: "rgb(231, 235, 240)" },
            }}
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                color: "black",
              },
              fieldset: { borderColor: "rgb(231, 235, 240)" },
            }}
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                color: "black",
              },
              fieldset: { borderColor: "rgb(231, 235, 240)" },
            }}
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{
              "& .MuiInputBase-root": {
                color: "black",
              },
              fieldset: { borderColor: "rgb(231, 235, 240)" },
            }}
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: palette.main,
              "&:hover": { backgroundColor: palette.main },
            }}
          >
            Update
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: palette.main,
              "&:hover": { backgroundColor: palette.main },
            }}
          >
            Cancle
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdateUser;
