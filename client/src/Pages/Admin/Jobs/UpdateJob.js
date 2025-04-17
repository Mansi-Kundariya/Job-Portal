import {
  Box,
  Dialog,
  DialogActions,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { jobTypeLoadAction } from "../../../Redux/Actoins/jobTypeAction";
import { updatejobAction } from "../../../Redux/Actoins/jobAction";
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string("Enter a job title").required("title is required"),
  description: yup
    .string("Enter a description")
    .min(6, "Description should be of minimum 6 characters length")
    .required("Description is required"),
  salary: yup.number("Enter a salary").required("Salary is required"),
  location: yup.string("Enter a location").required("Location is required"),
  jobType: yup.string("Enter a Category").required("Category is required"),
});

const UpdateJob = ({ row, id, open, onClose }) => {
  console.log('row' ,row)
  const { palette } = useTheme();

  const dispatch = useDispatch();

  //job type
  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const { jobType } = useSelector((state) => state.jobTypeAll);

  const formik = useFormik({
    initialValues: {
      title: row.title,
      description: row.description,
      salary: row.salary,
      location: row.location,
      jobType: row.jobType
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(updatejobAction(id, values));
      actions.resetForm();
      onClose();
      window.location.reload();
    },
  });

  return (
    <Dialog open={open}>
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h5"
          component="h2"
          type="submit"
          sx={{
            margin: 2,
            textAlign: "center",
            color: palette.main,
            fontWeight: "bold",
            fontSize: 35,
          }}
        >
          Update a Job
        </Typography>
        <TextField
          sx={{ ml: 1.5, mb: 3, width: "95%" }}
          id="title"
          label="Title"
          name="title"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          sx={{ ml: 1.5, mb: 3, width: "95%" }}
          id="description"
          name="description"
          label="Description"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          sx={{ ml: 1.5, mb: 3, width: "95%" }}
          id="salary"
          name="salary"
          label="Salary"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Salary"
          value={formik.values.salary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.salary && Boolean(formik.errors.salary)}
          helperText={formik.touched.salary && formik.errors.salary}
        />
        <TextField
          sx={{ ml: 1.5, mb: 3, width: "95%" }}
          id="location"
          name="location"
          label="Location"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
        />

        <TextField
          sx={{ ml: 1.5, mb: 3, width: "95%" }}
          className="px-2 my-2"
          variant="outlined"
          name="jobType"
          id="jobType"
          select
          label="Category"
          value={formik.values.jobType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.jobType && Boolean(formik.errors.jobType)}
          helperText={formik.touched.jobType && formik.errors.jobType}
        >
          <MenuItem key={""} value={""} ></MenuItem>

          {jobType &&
            jobType.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.jobTypeName}
              </MenuItem>
            ))}
        </TextField>
        <DialogActions sx={{ marginBottom: 2 }}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: palette.main,
              "&:hover": { backgroundColor: palette.main },
            }}
          >
            Update job
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

export default UpdateJob;
