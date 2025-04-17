import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createJobTypeAction } from "../../../Redux/Actoins/jobTypeAction";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  jobTypeName: yup.string("Enter a Category").required("Category is required"),
});

const CreateCaregory = ({ open, onClose}) => {
  const { palette } = useTheme();

  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user: user && user._id,
      jobTypeName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(createJobTypeAction(values));
      actions.resetForm();
      onClose();
      window.location.reload();
    },
  });

  return (
    <Dialog open={open}>
        <form
          onSubmit={formik.handleSubmit}
          >
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
                Create Category
              </Typography>
            </DialogTitle>
            <DialogContent>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              id="jobTypeName"
              label="category"
              name="jobTypeName"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="category name"
              value={formik.values.jobTypeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)
              }
              helperText={
                formik.touched.jobTypeName && formik.errors.jobTypeName
              }
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
              Create category
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: palette.main,
                "&:hover": { backgroundColor: palette.main },
              }}
              onClick={onClose}
            >
              Cancle
            </Button>
            </DialogActions>
            </form>
    </Dialog>
  );
};

export default CreateCaregory;
