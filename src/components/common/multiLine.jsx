import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";

const MultiLine = ({ label, formik, name, value }) => {
  return (
    <FormControl fullWidth>
      <TextField
        className="bg-white"
        multiline
        maxRows={4}
        sx={{ mt: ".5rem" }}
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onBlur={formik?.handleBlur}
        error={formik?.touched[name] && formik?.errors[name]}
        onChange={formik?.handleChange}
      />
      {formik?.touched[name] && formik?.errors[name] && (
        <>
          <FormHelperText sx={{ color: "red" }} className="mb-2">
            {formik?.errors[name]}
          </FormHelperText>
        </>
      )}
    </FormControl>
  );
};

export default MultiLine;
