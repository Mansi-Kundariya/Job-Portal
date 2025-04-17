import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../Redux/Actoins/userAction";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .min(2, "First Name should be of minimum 2 characters length")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .min(2, "Last Name should be of minimum 2 characters length")
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

const Register = ({ open, onClose, onLoginClick }) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignUpAction(values));
      actions.resetForm();
      navigate("/");
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
      <Typography variant="h4" sx={{ ml: '38%', fontWeight: "bold", color: palette.main }}>
          Register
        </Typography>
        <Typography variant="title" sx={{ ml: 5 , mb: 3,  color:'text.secondary' }}>
        Create an account & Start posting or hiring talents
        </Typography>
        <IconButton
          sx={{ float: "right" }}
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
       
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{
              mb: 3,
              mt: 1,
              "& .MuiInputBase-root": {
                color: "text.secondary",
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
                color: "text.secondary",
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
                color: "text.secondary",
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
              mb: 3,
              "& .MuiInputBase-root": {
                color: "text.secondary",
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

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: palette.main,
              "&:hover": { backgroundColor: palette.main },
            }}
          >
            Register
          </Button>
        </form>
        <Typography variant="title" color="text.secondary" ml={'35%'}>
          {" "}
          Have an account?{" "}
          <Button variant="text" onClick={onLoginClick}>
            Log In
          </Button>{" "}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
