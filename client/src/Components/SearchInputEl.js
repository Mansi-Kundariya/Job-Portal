import React from "react";
import Alert from "@mui/material/Alert";
import * as yup from "yup";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import { Box, Button, InputBase, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  search: yup
    .string("Enter your search query")
    .required("this field can not be empty"),
});

const SearchInputEl = () => {
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      search: "",
    },

    validationSchema: validationSchema,
    onSubmit,
  });

  const { palette } = useTheme();

  // Error message
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "80%", marginTop: 30 }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <InputBase
          sx={{ bgcolor: "white", padding: "10px", borderRadius: 7, mr: 3 }}
          fullWidth={true}
          id="search"
          name="search"
          label="search"
          placeholder="ex: developer, front end"
          value={values.search}
          onChange={handleChange}
          error={touched.search && Boolean(errors.search)}
        />

        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: palette.main,
            borderRadius: 7,
            pl: 4,
            pr: 4,
            "&:hover": { backgroundColor: palette.main },
          }}
          variant="contained"
          type="submit"
          disabled={isSubmitting}
        >
          Search
        </Button>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {touched.search && (
          <Alert
            variant="filled"
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errors.search}
          </Alert>
        )}
      </Snackbar>

      {/* <Box component='span' color='red'>{touched.search && errors.search}</Box> */}
    </form>
  );
};

export default SearchInputEl;
