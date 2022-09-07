import { FormControl, FormHelperText, MenuItem, TextField } from "@mui/material";
import React from "react";

const Select = ({ label, options, value, formik, name }) => {
  return (
    <FormControl fullWidth>
      <TextField
        select
        className="w-full bg-gray-300"
        variant="outlined"
        sx={{ mt: "1rem" }}
        label={label}
        name={name}
        value={value}
        onBlur={formik?.handleBlur}
        error={formik?.touched[name] && formik?.errors[name]}
        onChange={formik?.handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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

export default Select;
