import React, { useEffect } from "react";
import "../App.css";
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
import { useDispatch, useSelector } from "react-redux";
import { userSignInAction } from "../Redux/Actoins/userAction";
import { useNavigate } from "react-router-dom";

const validationScheme = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "password should be of minimum 8 character length")
    .required("Password is required"),
});

const Login = ({ open, onClose, onRegistrationClick }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);

  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo.user.role === 1) {
        navigate("/admin/dashboard");
        window.location.reload();
      } else {
        navigate("/user/dashboard");
        window.location.reload();
      }
    }
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values, actions) => {
      dispatch(userSignInAction(values));
      actions.resetForm();
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
      <Typography variant="h4" sx={{ marginLeft: '40%', fontWeight: "bold" , color: palette.main}}>
      Log In
        </Typography>
        <Typography variant="title" sx={{ marginLeft: '37%' }}>
         Welcome Back!
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
            sx={{ mb: 3, mt: 1 }}
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
            sx={{ mb: 3 }}
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
              background: (theme) => theme.palette.main,
              "&:hover": { background: (theme) => theme.palette.main },
            }}
          >
            Log In
          </Button>
          <Typography
            sx={{ alignItems: "center", ml: "30%" }}
            variant="title"
            color="text.secondary"
          >
            {" "}
            Do not have an account?{" "}
            <Button variant="text" onClick={onRegistrationClick}>
              Sign up
            </Button>{" "}

          </Typography>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
